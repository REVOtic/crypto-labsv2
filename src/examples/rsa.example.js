const rsa = require("../rsa")

async function rsaExample() {
    const message = "this is a long message";
    const keyPair = await rsa.generateKey();
    const cipherText = await rsa.encryptString(keyPair, message);
    const plainText = await rsa.decryptEncrytedMessage(keyPair, cipherText)
    const publicKey = await rsa.exportKey(keyPair, "public")
    const privateKey = await rsa.exportKey(keyPair, "private")

    console.log(plainText, publicKey, publicKey)
}

rsaExample()
