const EC = require('elliptic').ec;
const ec = new EC('curve25519');

const generateKeyPair = async () => {
    return new Promise(async (resolve, reject) => {
        const keyPair = await  ec.genKeyPair()
        resolve(keyPair)
    })

}


const deriveKey = (key1, key2) => {
    return key1.derive(key2.getPublic())
}

const curve = {
    generateKeyPair,
    deriveKey,
}

module.exports = curve;