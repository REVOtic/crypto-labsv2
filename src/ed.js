const crypto = require('crypto');
const ed = require('ed25519');
const { aes } = require('..');
const { createCurve } = require('./aes');
const rsa = require("./aes")

const getHashedSecret = (secretString) => {
	return new Promise((resolve, reject) => {
		if (!secretString){sssssss
			return resolve(crypto.randomBytes(32))
		}

		resolve(crypto.createHash('sha256').update(secretString).digest())
	})
}


const generateKeyPair = (seed) => {
	
	return new Promise((resolve, reject) => {
		if (!seed) return reject(false);
		resolve(ed.MakeKeypair(seed))
	})
}


const sign = async (message, keyPair) => {
	return new Promise(async (resolve, reject) => {
		if (!message || !keyPair) return reject(false);
		resolve(await ed.Sign(Buffer.from(message, 'utf8'), keyPair.privateKey))
	})
}

const verify = async (message, signature, keyPair) => {
	return new Promise(async (resolve, reject) => {
		 if (!message || !signature || !keyPair)  reject(false);
		else  resolve(await ed.Verify(Buffer.from(message, 'utf8'), signature, keyPair.publicKey))
	})
}


// const encryptMessage = async (key, secret = "") => {
// 	console.log(typeof key)
// 		const curve = await aes.createCurve();
// 		const shared = await aes.computeSecret(key, curve);
// 		// const encrypted = await aes.encryptMessage(shared, message);
// }



// const decryptEncrytedMessage = async () => {
// 	return await rsa.decryptEncrytedMessage(key, encryptedString)
// }

const localEd = {
	getHashedSecret,
	generateKeyPair,
	sign,
	verify,
	// encryptMessage,
	// decryptEncrytedMessage
}

module.exports = localEd;

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


// const localEd25519 = async () => {
// 	// Alice likes to be random, and remembers that the MakeKeypair function takes a 32 byte buffer
// 	const aliceSeed = crypto.randomBytes(32); //random byte buffer of 32 byte size
// 	const aliceKeypair = ed25519.MakeKeypair(aliceSeed);
// 	//console.log('Alice private key', aliceKeypair.privateKey)
// 	console.log('Alice public key', aliceKeypair.publicKey)


// 	/*
// 		Now some messages
// 	*/
// 	const message = 'Hi Bob, How are your pet monkeys doing? What were their names again? -Alice';


// 	const signature = ed25519.Sign(Buffer.from(message, 'utf8'), aliceKeypair.privateKey); //Using Sign(Buffer, Keypair object)
// 	console.log('This is the signature', signature);
// 	const result = await checkSignature(message, signature, aliceKeypair)
// 	console.log(result);
// }

// // Alice sends her message and signature over to bob.








