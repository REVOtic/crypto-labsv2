const ed = require("../ed")
const SECRET  = require("./constant")
const edExample = async () => {
	const secret = "secret";
	const hasedSecret = await ed.getHashedSecret(secret);
	// console.log(hasedSecret)

	const keyPair = await ed.generateKeyPair(hasedSecret)
	// console.log("key::", keyPair)

	const message = "This is a long message"
	const signature = await ed.sign(message, keyPair);
	// console.log("Signature::", signature)
	const signatureVerification = await ed.verify(message, signature, keyPair)
	if (!signatureVerification) {
		return
	}



	const encryptedMessage = await ed.encryptMessage(keyPair.publicKey, SECRET);
	console.log("encrypte", encryptedMessage)


}
edExample()
// /*
// 	First lets make some keypairs.
// */
// const checkSignature = (message, signature, aliceKeypair) => {
// 	return new Promise((resolve, reject) => {
// 		// check the other signatures
// 		if (ed25519.Verify(Buffer.from(message, 'utf8'), signature, aliceKeypair.publicKey)) {
// 			resolve('Signature valid');
// 		} else {
// 			reject('Signature NOT valid');
// 		}
// 	})
// }

// const localed = async () => {
// 	// Alice likes to be random, and remembers that the MakeKeypair function takes a 32 byte buffer
// 	var aliceSeed = crypto.randomBytes(32); //random byte buffer of 32 byte size
// 	var aliceKeypair = ed25519.MakeKeypair(aliceSeed);
// 	//console.log('Alice private key', aliceKeypair.privateKey)
// 	console.log('Alice public key', aliceKeypair.publicKey)


// 	/*
// 		Now some messages
// 	*/
// 	var message = 'Hi Bob, How are your pet monkeys doing? What were their names again? -Alice';


// 	var signature = ed25519.Sign(Buffer.from(message, 'utf8'), aliceKeypair.privateKey); //Using Sign(Buffer, Keypair object)
// 	console.log('This is the signature', signature);
// 	const result = await checkSignature(message, signature, aliceKeypair)
// 	console.log(result);
// }

// // Alice sends her message and signature over to bob.
// localed()








