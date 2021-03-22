const EdDSA = require('elliptic').eddsa;
const md5 = require('md5');
const sha256 = require("sha256")
const ec = new EdDSA('ed25519');

// Create and initialize EdDSA context
// (better do it once and reuse it)


const createSignature = (secret) => {
    return new Promise((resolve, reject) => {
        if (!secret) return reject(false)
        resolve(ec.makeSignature(secret))
    })
}

const createHashMessage = (message) => {
    return sha256(message)
}
const convertKeyFromSecret = (hexString) => {
    return new Promise((resolve, reject) => {
        if (!hexString) return reject(false);
        resolve(ec.keyFromSecret(hexString))
    })
}


const signWithKey = (key, hashedMessage) => {
    return new Promise((resolve, reject) => {
        if (!key || !hashedMessage) return reject(false);
        resolve(key.sign(hashedMessage).toHex())
    })
}

const verifySignature = (key, hashedMessage, signature) => {
    return new Promise((resolve, reject) => {
        if (!key || !hashedMessage || !signature) return reject(false);
        resolve(key.verify(hashedMessage, signature))
    })
}



const eddsa = {
    createSignature,
    createHashMessage,
    convertKeyFromSecret,
    signWithKey,
    verifySignature
}

module.exports = eddsa;
// function localEddsa(){
// let secret = "Hello how are yo key.sign(msgHash).toHex()u1?"
// let hexString = ec.makeSignature(secret);
// //console.log(hexString);
// // Create key pair from secret
// var key = ec.keyFromSecret(hexString); // hex string, array or Buffer

// // Sign the message's hash (input must be an array, or a hex-string)
// var msgHash = md5('Here comes the Sun');
// var signature = key.sign(msgHash).toHex();

// // Verify signature
// console.log(key.verify(msgHash, signature));
// }
// module.exports = localEddsa;

