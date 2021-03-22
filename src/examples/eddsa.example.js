const eddsa = require("../eddsa")
const SECRET  = require("./constant")

async function eddsaExample() {
   
    const message = "This is a long message."
    const hexString = await eddsa.createSignature(SECRET);
    console.log("signature", signature)
    const hashedMessage =  eddsa.createHashMessage(message);
    console.log("Hashed", hashedMessage)
    const key = await eddsa.convertKeyFromSecret(hexString);
    console.log("lkey", key)
    const signature = await eddsa.signWithKey(key, hashedMessage);
    console.log("signed", signature)
    const verification = await eddsa.verifySignature(key, hashedMessage, signature)
    console.log("Verification::", verification)


}
eddsaExample()



