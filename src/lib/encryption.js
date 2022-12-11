import OpenPGP, { Cipher } from 'react-native-fast-openpgp';

function unarmor(encryptedText) {
  return encryptedText.split('openpgp-mobile')[1].split('-----END')[0].trim();
}

function removePrefix(text) {
  const arr = text.split(':');
  return arr.length === 1 ? arr[0] : arr[1];
}

function armorEncryptedText(unarmored) {
  const text = removePrefix(unarmored);

  return `-----BEGIN PGP MESSAGE-----
Version: openpgp-mobile
  
${text}
-----END PGP MESSAGE-----`;
}

function armorPrivateKey(unarmored) {
  return `-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: openpgp-mobile
  
${removePrefix(unarmored)}
-----END PGP PRIVATE KEY BLOCK-----`;
}

function armorPublicKey(unarmored) {
  return `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: openpgp-mobile
    
${removePrefix(unarmored)}
-----END PGP PUBLIC KEY BLOCK-----`;
}

export async function generateKeyPair() {
  const generated = await OpenPGP.generate({
    keyOptions: { cipher: Cipher.AES256 },
  });
  return {
    privateKey: `e37privatekey:${unarmor(generated.privateKey)}`,
    publicKey: `e37publickey:${unarmor(generated.publicKey)}`,
  };
}

export async function encryptText(text, publicKey) {
  try {
    const encrypted = await OpenPGP.encrypt(text, armorPublicKey(publicKey));
    const unarmored = unarmor(encrypted);

    return { data: `Encrypt37:${unarmored}`, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
}

export async function decryptText(encryptedText, privateKey) {
  try {
    const decrypted = await OpenPGP.decrypt(
      armorEncryptedText(encryptedText),
      armorPrivateKey(privateKey)
    );
    return { data: decrypted, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
