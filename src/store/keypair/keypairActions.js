export const keypairActionTypes = {
  SET_PRIVATE_KEY: 'keypair/SET_PRIVATE_KEY',
  SET_PUBLIC_KEY: 'keypair/SET_PUBLIC_KEY',
  SET_PUBLIC_KEYS: 'keypair/SET_PUBLIC_KEYS',
  FINISH_LOADING: 'keypair/FINISH_LOADING',
  SET_BACKUP: 'keypair/SET_BACKUP',
  SET_ACTIVE_PUBLIC_KEY: 'keypair/SET_ACTIVE_PUBLIC_KEY',

  NAVIGATE_TO_NEW_KEYPAIR_PRESSED: 'keypair/NAVIGATE_TO_NEW_KEYPAIR_PRESSED',
  NAVIGATE_TO_EXISTING_KEYPAIR_PRESSED: 'keypair/NAVIGATE_TO_EXISTING_KEYPAIR_PRESSED',
  GENERATE_KEYPAIR_PRESSED: 'keypair/GENERATE_KEYPAIR_PRESSED',
  FINISH_BACKUP_PRESSED: 'keypair/FINISH_BACKUP_PRESSED',
  PASTE_PUBLIC_KEY_PRESSED: 'keypair/PASTE_PUBLIC_KEY_PRESSED',
  PASTE_PRIVATE_KEY_PRESSED: 'keypair/PASTE_PRIVATE_KEY_PRESSED',
  FINISH_ADD_EXISTING_KEYPAIR_PRESSED: 'keypair/FINISH_ADD_EXISTING_KEYPAIR_PRESSED',
  DELETE_KEYPAIR_PRESSED: 'keypair/DELETE_KEYPAIR_PRESSED',
  KEY_PRESSED: 'keypair/KEY_PRESSED',
  ADD_PUBLIC_KEY_PRESSED: 'keypair/ADD_PUBLIC_KEY_PRESSED',
  SAVE_PUBLIC_KEY_PRESSED: 'keypair/SAVE_PUBLIC_KEY_PRESSED',
  DELETE_PUBLIC_KEY_PRESSED: 'keypair/DELETE_PUBLIC_KEY_PRESSED',
  CHANGE_ACTIVE_PUBLIC_KEY_PRESSED: 'keypair/CHANGE_ACTIVE_PUBLIC_KEY_PRESSED',
  FRIEND_PUBLIC_KEY_PRESSED: 'keypair/FRIEND_PUBLIC_KEY_PRESSED',
};

export const keypairActionCreators = {
  setPrivateKey(privateKey) {
    return { type: keypairActionTypes.SET_PRIVATE_KEY, payload: { privateKey } };
  },
  setPublicKey(publicKey) {
    return { type: keypairActionTypes.SET_PUBLIC_KEY, payload: { publicKey } };
  },
  setPublicKeys(publicKeys) {
    return { type: keypairActionTypes.SET_PUBLIC_KEYS, payload: { publicKeys } };
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
  keyPressed(label, value) {
    return { type: keypairActionTypes.KEY_PRESSED, payload: { label, value } };
  },
  addPublicKeyPressed() {
    return { type: keypairActionTypes.ADD_PUBLIC_KEY_PRESSED };
  },
  savePublicKeyPressed(label, publicKey) {
    return { type: keypairActionTypes.SAVE_PUBLIC_KEY_PRESSED, payload: { label, publicKey } };
  },
  deletePublicKeyPressed(label) {
    return { type: keypairActionTypes.DELETE_PUBLIC_KEY_PRESSED, payload: { label } };
  },
  setActivePublicKey(label) {
    return { type: keypairActionTypes.SET_ACTIVE_PUBLIC_KEY, payload: { label } };
  },
  changeActivePublicKeyPressed(label) {
    return { type: keypairActionTypes.CHANGE_ACTIVE_PUBLIC_KEY_PRESSED, payload: { label } };
  },
  friendPublicKeyPressed(label, publicKey) {
    return { type: keypairActionTypes.FRIEND_PUBLIC_KEY_PRESSED, payload: { label, publicKey } };
  },
};
