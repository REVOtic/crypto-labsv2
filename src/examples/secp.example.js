const secp  = require("../secp");
const SECRET  = require("./constant")

async function secpExample  ()  {
    const message = "Hello there";
    const {privateKey, publicKey} = await secp.generatePublicPrivateKey(SECRET)
    console.log(privateKey, publicKey)
    const hashedMessage = await secp.hashMessage(message);
    const signMessage = await secp.signSignature(hashedMessage, privateKey);
    const state = await secp.verifySignature(signMessage, hashedMessage, publicKey);
}

secpExample()