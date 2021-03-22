const curve = require('../curve')

const user_1 = async() => {
    return  await curve.generateKeyPair();
}


const user_2 = async() => {
 return   await curve.generateKeyPair();
}
async function curveExample(){
    const user1KeyPair = await user_1();
    const user2KeyPair = await user_2();
    const sharedKey = await curve.deriveKey(user1KeyPair, user2KeyPair)
    console.log("sharedKey", sharedKey)

}
curveExample()
