

const aes = require("../aes");

async function sender(curveName) {

    const curve = await aes.createCurve(curveName);
    const keys = await aes.generateKeys(curve);
    const publicKey = await aes.getPublicKey(curve)
    return {
        curve, keys, publicKey
    }
}

async function receiver(curveName) {

    const curve = await aes.createCurve(curveName)
    const keys = await aes.generateKeys(curve);
    const publicKey = await aes.getPublicKey(curve)
    return {
        curve, keys, publicKey
    }
}


const computeSecret = async (r, s) => {

    const sKey = await aes.computeSecret(s.publicKey, r.curve);
    const rKey = await aes.computeSecret(r.publicKey, s.curve);
        console.log(sKey=== rKey)
    return {rKey, sKey};
}


async function aesExample() {

    const s = await sender("secp256k1");
    const r = await receiver("secp256k1");
    const {rKey, sKey} = await computeSecret(r, s)
       
    const text = "This is a long message";
    const encryptedMessage = await aes.encryptMessage(rKey,text)
    console.log("encrypted" ,encryptedMessage)


    const plainText = await aes.decryptMessage(rKey, encryptedMessage);
    console.log("plaintext:: ", plainText)
}


aesExample()


// var aes256 = require('aes256');

// var key = 'my passphrase';
// var plaintext = 'my plaintext message';
// var buffer = Buffer.from(plaintext);

// var encryptedPlainText = aes256.encrypt(key, plaintext);
// var decryptedPlainText = aes256.decrypt(key, encryptedPlainText);
// // plaintext === decryptedPlainText

// var encryptedBuffer = aes256.encrypt(key, buffer);
// var decryptedBuffer = aes256.decrypt(key, encryptedBuffer);
// console.log(decryptedPlainText)