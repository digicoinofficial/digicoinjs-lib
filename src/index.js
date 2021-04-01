var digicoinjs = require('bitcoinjs-lib')

Object.assign(digicoinjs.networks, require('./networks'))

digicoinjs.utils = require('./utils')

module.exports = digicoinjs