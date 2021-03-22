const crypto = require('crypto');
const aes256 = require('aes256') //calling the library
    
    

const createCurve = (curveName = "secp256k1") => {
    return new Promise((resolve, _) => {
        resolve(crypto.createECDH(curveName))
    })
}

const generateKeys =  (createdCurve)  => {
    return createdCurve.generateKeys();
}

const getPublicKey = (createdCurve) => {
    return createdCurve.getPublicKey().toString('base64');
}


const computeSecret = (publicKey, createdCurve) => {
    console.log(createdCurve)
    return new Promise((resolve, reject) => {
        if(!publicKey) return reject(false);
        resolve(createdCurve.computeSecret(publicKey, 'base64', 'hex'))
    })
}

const encryptMessage = (sharedKey, message) => {
    return new Promise((resolve, reject) => {
        if(!sharedKey || !message) return reject(false);
        resolve(aes256.encrypt(sharedKey, message)) 
    })
}

const decryptMessage = (sharedKey, encryptedMessage) => {
    return new Promise((resolve, reject) => {
        if(!sharedKey || !encryptedMessage) return reject(false);
        resolve(aes256.decrypt(sharedKey, encryptedMessage)) 
    })
}

const localAes = {
    createCurve,
    generateKeys,
    getPublicKey,
    computeSecret,
    encryptMessage,
    decryptMessage

}

module.exports = localAes