require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note screen proof grace slight force gauge'; 
let testAccounts = [
"0xc13f0d21e15634e72c8a4c7384bf4d2d8ad59f9fff88e0d6bb14c4b762db66b6",
"0x508c1d797e9f12c3c207f7f5bfd53db0d0320b9f420107eddcdb73f1688ea692",
"0x4fec1ad33bc29c641bd43b8f27c99ea8c8fcccfd437ab6dc8a66631b5d17d247",
"0xf280c5176b5e7b21e0d8772c32c95e421305eccf888ac3d580e08e7a6c43d38c",
"0x9ecf83b657bc7288b062ffe39305dcc7cf891ac573db07057c7e40a156f05f43",
"0x9ca8a7bdab7249dc2063285de4d68fe23a187b31094b9e0da62ad05f44b5f7a3",
"0xa9ebb383708dfae70be943f096af1cc4b450243c58dfef239c120aeed72f0781",
"0xaac5b4ec3109d16d3e309cbb45c8d1dabd5baa1aef7b5a6e4dd4a19bfb1aa680",
"0x2f164380605641615bd86baefdc003b89916c692d657ea322c429f67433293bd",
"0x8b62853a731e88a7c91d2268da9d05f84a9adca008a887f07bdaf734de1d408f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


