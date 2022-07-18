require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rate sister pulp hunt deputy success shield'; 
let testAccounts = [
"0x677aaecf58664ded1da59f7da0dc7ad659a9697a3f34395795922a0be12ee8e4",
"0x85985884e751e79a02584c59c9be07dd6a788883e623c3ac34aea41aa082c7b9",
"0x8f808c9dea96519e40b4427fade3990108af4f5b8982a45ef91172faa99a3c83",
"0x96a2c3cce1640b305fd9c8eda8438faabd20ba91083d7c710636c4ecbc1ed20a",
"0x7031232aec8919b769c284ce7403d61b12e2ff790cb83e0bbc66bc1b12033dcb",
"0xb208db95d0cdc1a778b1fb0a663cb510c223515b9b3909679ffb87d1dfee9a7d",
"0x2bed98f3ea735792f1fb550e11b0ef6bfd2a9c01dcd1d583f6a57d19e8f9750b",
"0x3e2d562601bddcb12619f87b2dfd67c91072b709d2d6d9ba0688e4decaa80629",
"0x14dd340a2d2010172d559194940597f9442b83e0979ba119b6a3d908db325205",
"0xccce7b78478cd646305f99249afdf2352b18e2a6eab039a69aa74ab4015d27e7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

