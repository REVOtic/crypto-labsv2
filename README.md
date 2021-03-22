# CryptoHelper

It is written in pure JS language, where various cryptographic algorithms listed below are implemented.

* [AES256](#AES256 (revo.aes()))
* [RSA](#RSA (revo.rsa()))
* [ECDSA](#ECDSA (revo.ecdsa()))
* [secp256k1](#secp256k1 (revo.secp256k1()))
* [EDDSA](#EdDSA (revo.eddsa())) 
* [ED25519](#Ed25519 (revo.ed25519()))
* [curve25519](#Curve25519 (revo.curve()))

## How to use

### Installation
##### for npm
> `npm i @revoalgotechnique/common`


### Examples
> `const revo = require('@revoalgotechnique/common')` </br>
> `revo.aes()`

#### for secp256k1
```javascript
const secp  = require("../secp");
const SECRET = 'my-secret';

async function secpExample  ()  {
    const message = "Hello there";
    const {privateKey, publicKey} = await secp.generatePublicPrivateKey(SECRET)
    console.log(privateKey, publicKey)
    const hashedMessage = await secp.hashMessage(message);
    const signMessage = await secp.signSignature(hashedMessage, privateKey);
    const state = await secp.verifySignature(signMessage, hashedMessage, publicKey);
}

secpExample()


```



##    Summary of Implementation of various Cryptographic Algorithms

### From SRC>Examples folder

Refer to the folder to understand it in a simple steps.

### From SRC files

#### AES256 (revo.aes())
Also known as Advanced Encryption Standard that has 256 bits of symmetric key that use same key for  both encryption as well as decryption. The bit size 256 is a form of AES that has 14 rounds of encryption that provides the highest level of security since it is implemented for sensitive data and is used for data in transit or network connection. Used in file encryption and wireless security.
In the implementation, there is shared key between alice, bob and may. Since the shared key is computed between alice and bob, may will not be able to read the message.


## RSA (revo.rsa())
`RSA`(Rivest–Shamir–Adleman) is an algorithm that uses asymmetric key i.e public and private key to encrypt and decrypt where a single key is not used. It is used for specific security services that enables public key encryption and is used widely to secure sensitive data that is sent over networks that are not secured.
In the implementation, we created a key and mentioned the byte size and declared a secret message. With encrypt method, encryption is done using public key and decrypted using private key. Since `node-RSA` is a combination of public and private key. We export to extract both the public and private key 


## ECDSA (revo.ecdsa())
Elliptic Curve Digital Signature Algorithm(`ECDSA`) is  the elliptic curve analogue of the Digital Signature Algorithm. It uses keys derived from elliptic curve cryptography (ECC). ECDSA is used across many security systems, is popular for use in secure messaging apps, and it is the basis of Bitcoin security (with Bitcoin “addresses” serving as public keys).It provides a higher degree of security with shorter key lengths.

Since ECDSA is for creating and verifying algorithm, in the implementation data is hashed using hashing algorithm the signer signs with its private key and the signature is verified using public key of the signer or else if the hashing function of the previous hash is equal to the current hash, then it returns true 
 
## secp256k1 (revo.secp256k1())
`secp256k1` refers to the parameters of the elliptic curve used in Bitcoin's public-key cryptography that uses secp256k1 with the ECDSA algorithm. It belongs to a special class of Elliptic curves
In the implementation, one of Alice’s private key is specified and Bob generates a strong key, both should have the same shared secret value and should return true.


## EdDSA (revo.eddsa())
`EDDSA`(Edward Curve Digital Signature Algorithm) is a choice for finite field, Elliptic Curve, base point and cryptographic hash function. Ed25519 is the EdDSA Signature scheme using SHA-512 and curve25519. It is designed to be faster than existing digital signature schemes without sacrificing security.
In the implementaion, EdDSA Context is initialised, secret key pair is created and message hash is signed. The signature is then first verified using the private and then public key. The verification shows to be true.

## Ed25519 (revo.ed25519())
`Ed25519` is the EdDSA signature scheme that uses SHA-512 and curve25519. It an elliptic curve that could be used for asymmetric encryption and EDDSA signature scheme.
In the implementation, private and public key is generated , signature is signed using hash and then the signed signature is verified.


## Curve25519 (revo.curve())
`Curve25519` is an elliptic curve offering 128 bits of security (256 bits key size) and designed for use with the elliptic curve Diffie–Hellman (ECDH) key agreement scheme. It is claimed to be highly secure and efficient. For example, It used in the key exchange scheme of TextSecure for Instant Messaging. Curve25519 also serves for key exchange and  authentication and is built in such a way as to avoid potential attacks on implementation and avoid side channel attacks and random number generator issues, one may expect more secure communication systems.
In the implementation, since the keys are generated and is shared using derived method, the sharedKeys between is displayed.


## Packages Used
> `npm i aes256` </br>
> `npm i node-rsa`</br>
> `npm i elliptic`</br>
> `npm i noble-ed25519`</br>
> `npm i md5`</br>
> `npm i noble-secp256k1`</br>
> `npm i eccrypto`</br>
> `npm i sha256` </br>

### Refernces

* https://wizardforcel.gitbooks.io/practical-cryptography-for-developers-book/content/
* https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/
* https://github.com/cryptocoinjs/secp256k1-node

### Note
- [`RSA is not as efficient in practice as ECDSA for signing purpose while validation of signature is faster with RSA.`]
- [`EdDSA is gaining more transacton nowadays as it is easy to implement and is faster than ECDSA. It also has plenty of secure open-source code available.`]
- [`sep256k1, used by bitcoin is gaining in popularity due to its several nice properties. It gives efficient computation and is 30% faster than the other curves.`]
 
  
