import { format } from 'date-fns';
import OpenPGP, { Cipher } from 'react-native-fast-openpgp';

import { asyncForEach } from './array';
import { encrypt37Extension } from './constants';
import { cachePath, deleteFile, extractFileNameAndExtension, statFile } from './file';

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

export const ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES = 50;
export const ENCRYPTION_SIZE_LIMIT_IN_BYTES = ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES * 1024 * 1024;

export const encryptionStatus = {
  SUCCEEDED: 'SUCCEEDED',
  ENCRYPT_FAILED: 'ENCRYPT_FAILED',
  DECRYPT_FAILED: 'DECRYPT_FAILED',
  TOO_LARGE: 'TOO_LARGE',
  WRONG_FILE: 'WRONG_FILE',
};

export async function generateKeyPair() {
  const generated = await OpenPGP.generate({
    keyOptions: { cipher: Cipher.AES256 },
  });
  return {
    privateKey: `e37privatekey:${unarmor(generated.privateKey)}`,
    publicKey: `e37publickey:${unarmor(generated.publicKey)}`,
  };
}

export async function isValidPublicKey(publicKey) {
  const { data } = await encryptText('test', publicKey);

  return !!data;
}

export async function encryptText(text, publicKey) {
  try {
    const encrypted = await OpenPGP.encrypt(text, armorPublicKey(publicKey));
    const unarmored = unarmor(encrypted);

    return { data: `e37:${unarmored}`, error: null };
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

async function encryptFile(inputPath, outputPath, publicKey) {
  try {
    await OpenPGP.encryptFile(inputPath, outputPath, publicKey);
    return true;
  } catch (e) {
    console.log('encrypt file failed', e);
    return false;
  }
}

async function decryptFile(inputPath, outputPath, privateKey) {
  try {
    await OpenPGP.decryptFile(inputPath, outputPath, privateKey);
    return true;
  } catch (e) {
    console.log('decrypt file failed', e);
    return false;
  }
}

function getEncryptedFileName(fileName) {
  const { extension } = extractFileNameAndExtension(fileName);
  return `${format(new Date(), 'yyyyMMdd_HHmmss_SSS')}${extension}.${encrypt37Extension}`;
}

function getOriginalFileName(encryptedFileName) {
  const parts = encryptedFileName.split('.');
  parts.pop();
  return parts.join('.');
}

export async function encryptFiles(files, publicKey) {
  if (!files?.length) {
    return [];
  }

  const encryptedFiles = [];
  await asyncForEach(files, async file => {
    const { name, path, size } = file;
    if (size > ENCRYPTION_SIZE_LIMIT_IN_BYTES) {
      encryptedFiles.push({
        name,
        path,
        size,
        status: encryptionStatus.TOO_LARGE,
      });
      return;
    }

    const inputPath = path;
    const encryptedName = getEncryptedFileName(name);
    const outputPath = `${cachePath}/${encryptedName}`;
    await deleteFile(outputPath);
    const success = await encryptFile(inputPath, outputPath, armorPublicKey(publicKey));

    if (success) {
      const { size: newSize } = await statFile(outputPath);
      encryptedFiles.push({
        name: encryptedName,
        path: outputPath,
        size: newSize,
        status: encryptionStatus.SUCCEEDED,
      });
    } else {
      encryptedFiles.push({
        name,
        path,
        size,
        status: encryptionStatus.ENCRYPT_FAILED,
      });
    }
  });

  return encryptedFiles;
}

export async function decryptFiles(files, privateKey) {
  if (!files?.length) {
    return [];
  }

  const decryptedFiles = [];

  await asyncForEach(files, async file => {
    const { name, path, size } = file;
    if (!name.endsWith(encrypt37Extension)) {
      decryptedFiles.push({
        name,
        path,
        size,
        status: encryptionStatus.WRONG_FILE,
      });
      return;
    }

    const inputPath = path;
    const decryptedName = getOriginalFileName(name);
    const outputPath = `${cachePath}/${decryptedName}`;
    await deleteFile(outputPath);
    const success = await decryptFile(inputPath, outputPath, armorPrivateKey(privateKey));

    if (success) {
      const { size: newSize } = await statFile(outputPath);
      decryptedFiles.push({
        name: decryptedName,
        path: outputPath,
        size: newSize,
        status: encryptionStatus.SUCCEEDED,
      });
    } else {
      decryptedFiles.push({
        name,
        path,
        size,
        status: encryptionStatus.DECRYPT_FAILED,
      });
    }
  });

  return decryptedFiles;
}
