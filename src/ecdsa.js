const EC = require('elliptic').ec;
const {convertToHex} = require('./utils/convert-to-hex')
const ec = new EC('secp256k1');



const generateKeyPair = () => {
    return new Promise(async (resolve, _) => {
         resolve(await ec.genKeyPair())
    })
}

const hashMessage = (message) => {
    return new Promise((resolve, reject) => {
        if(!message) return reject(false);
        resolve(convertToHex(message))
    })
}
const sign = (key, hashedMessage) => {
    return key.sign(hashedMessage);
}

const expDEREncoded = (signature) => {
    return signature.toDER();

}
const localEcdsa = {
    generateKeyPair,
    hashMessage,
    sign,
    expDEREncoded,
}
module.exports = localEcdsa;


// function localEcdsa() {


//     // Generate keys

//     //console.log(key)
//     // Sign the message's hash (input must be an array, or a hex-string)
//     var msgHash = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     console.log(msgHash)
//     var signature = key.sign(msgHash);

//     // Export DER encoded signature in Array
//     var derSign = signature.toDER();
//     console.log(derSign)
//     // Verify signature
//     console.log(key.verify(msgHash, derSign));
// }



