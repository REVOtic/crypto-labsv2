const localAes = require('./src/aes')
const localcurve = require('./src/curve')
const localEcdsa = require('./src/ecdsa')
const localEddsa = require('./src/eddsa')
const localSecp = require('./src/secp')
const localRsa = require('./src/rsa')
const localEd = require('./src/ed')



console.log("Crypto Utils....")


const cryptoUtils = {
    aes: localAes,
    curve: localcurve,
    ecdsa: localEcdsa,
    eddsa: localEddsa,
    secp: localSecp,
    rsa: localRsa,
    ed: localEd
}

module.exports = cryptoUtils;

