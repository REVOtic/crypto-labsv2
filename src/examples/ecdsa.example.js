const ecdsa = require("../ecdsa")

async function ecdsaExample() {
    const message = "This is a long message."
    const keyPair = await ecdsa.generateKeyPair();
    // console.log("keyPair", keyPair);
    const hashedMessage = await ecdsa.hashMessage(message);

    const signature = await ecdsa.sign(keyPair, hashedMessage);
    // console.log("signature", signature)

    const  encodedSignature = await ecdsa.expDEREncoded(signature)
    console.log(encodedSignature)
}


ecdsaExample()