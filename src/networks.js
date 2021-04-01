module.exports = {
    digicoin: {
        messagePrefix: '\x15Digicoin Signed Message:\n',
        bech32: 'fg',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x1f,
        scriptHash: 0x26,
        wif: 0x42
    },
    digicoin_testnet: {
        messagePrefix: '\x15Digicoin Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
