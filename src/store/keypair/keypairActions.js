export const keypairActionTypes = {
  SET_PRIVATE_KEY: 'keypair/SET_PRIVATE_KEY',
  SET_PUBLIC_KEY: 'keypair/SET_PUBLIC_KEY',
  FINISH_LOADING: 'keypair/FINISH_LOADING',
  SET_BACKUP: 'keypair/SET_BACKUP',

  NAVIGATE_TO_NEW_KEYPAIR_PRESSED: 'keypair/NAVIGATE_TO_NEW_KEYPAIR_PRESSED',
  NAVIGATE_TO_EXISTING_KEYPAIR_PRESSED: 'keypair/NAVIGATE_TO_EXISTING_KEYPAIR_PRESSED',
  GENERATE_KEYPAIR_PRESSED: 'keypair/GENERATE_KEYPAIR_PRESSED',
  FINISH_BACKUP_PRESSED: 'keypair/FINISH_BACKUP_PRESSED',
  PASTE_PUBLIC_KEY_PRESSED: 'keypair/PASTE_PUBLIC_KEY_PRESSED',
  PASTE_PRIVATE_KEY_PRESSED: 'keypair/PASTE_PRIVATE_KEY_PRESSED',
  FINISH_ADD_EXISTING_KEYPAIR_PRESSED: 'keypair/FINISH_ADD_EXISTING_KEYPAIR_PRESSED',
  DELETE_KEYPAIR_PRESSED: 'keypair/DELETE_KEYPAIR_PRESSED',
};

export const keypairActionCreators = {
  setPrivateKey(privateKey) {
    return { type: keypairActionTypes.SET_PRIVATE_KEY, payload: { privateKey } };
  },
  setPublicKey(publicKey) {
    return { type: keypairActionTypes.SET_PUBLIC_KEY, payload: { publicKey } };
  },
  finishLoading() {
    return { type: keypairActionTypes.FINISH_LOADING };
  },
  setBackup(finished) {
    return { type: keypairActionTypes.SET_BACKUP, payload: { finished } };
  },
  navigateToNewKeypairPressed() {
    return { type: keypairActionTypes.NAVIGATE_TO_NEW_KEYPAIR_PRESSED };
  },
  navigateToExistingKeypairPressed() {
    return { type: keypairActionTypes.NAVIGATE_TO_EXISTING_KEYPAIR_PRESSED };
  },
  generateKeypairPressed() {
    return { type: keypairActionTypes.GENERATE_KEYPAIR_PRESSED };
  },
  finishBackupPressed() {
    return { type: keypairActionTypes.FINISH_BACKUP_PRESSED };
  },
  pastePublicKeyPressed(publicKey) {
    return { type: keypairActionTypes.PASTE_PUBLIC_KEY_PRESSED, payload: { publicKey } };
  },
  pastePrivateKeyPressed(privateKey) {
    return { type: keypairActionTypes.PASTE_PRIVATE_KEY_PRESSED, payload: { privateKey } };
  },
  finishAddExistingKeypairPressed() {
    return { type: keypairActionTypes.FINISH_ADD_EXISTING_KEYPAIR_PRESSED };
  },
  deleteKeypairPressed() {
    return { type: keypairActionTypes.DELETE_KEYPAIR_PRESSED };
  },
};
