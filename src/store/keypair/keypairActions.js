export const keypairActionTypes = {
  SET_PRIVATE_KEY: 'keypair/SET_PRIVATE_KEY',
  SET_PUBLIC_KEY: 'keypair/SET_PUBLIC_KEY',
  SET_PUBLIC_KEYS: 'keypair/SET_PUBLIC_KEYS',
  FINISH_LOADING: 'keypair/FINISH_LOADING',
  SET_BACKUP: 'keypair/SET_BACKUP',
  SET_ACTIVE_PUBLIC_KEY: 'keypair/SET_ACTIVE_PUBLIC_KEY',
  SET_NEW_PRIVATE_KEY: 'keypair/SET_NEW_PRIVATE_KEY',
  SET_NEW_PUBLIC_KEY: 'keypair/SET_NEW_PUBLIC_KEY',

  GENERATE_KEYPAIR_PRESSED: 'keypair/GENERATE_KEYPAIR_PRESSED',
  GENERATE_NEW_KEYPAIR_PRESSED: 'keypair/GENERATE_NEW_KEYPAIR_PRESSED',
  FINISH_BACKUP_PRESSED: 'keypair/FINISH_BACKUP_PRESSED',
  PASTE_PUBLIC_KEY_PRESSED: 'keypair/PASTE_PUBLIC_KEY_PRESSED',
  PASTE_PRIVATE_KEY_PRESSED: 'keypair/PASTE_PRIVATE_KEY_PRESSED',
  FINISH_ADD_EXISTING_KEYPAIR_PRESSED: 'keypair/FINISH_ADD_EXISTING_KEYPAIR_PRESSED',
  CONFIRM_DELETE_KEYPAIR_PRESSED: 'keypair/CONFIRM_DELETE_KEYPAIR_PRESSED',
  SAVE_FRIEND_PUBLIC_KEY_PRESSED: 'keypair/SAVE_FRIEND_PUBLIC_KEY_PRESSED',
  DELETE_FRIEND_PUBLIC_KEY_PRESSED: 'keypair/DELETE_FRIEND_PUBLIC_KEY_PRESSED',
  CHANGE_ACTIVE_PUBLIC_KEY_PRESSED: 'keypair/CHANGE_ACTIVE_PUBLIC_KEY_PRESSED',
};

export const keypairActionCreators = {
  setPrivateKey(privateKey) {
    return { type: keypairActionTypes.SET_PRIVATE_KEY, payload: { privateKey } };
  },
  setPublicKey(publicKey) {
    return { type: keypairActionTypes.SET_PUBLIC_KEY, payload: { publicKey } };
  },
  setNewPrivateKey(privateKey) {
    return { type: keypairActionTypes.SET_NEW_PRIVATE_KEY, payload: { privateKey } };
  },
  setNewPublicKey(publicKey) {
    return { type: keypairActionTypes.SET_NEW_PUBLIC_KEY, payload: { publicKey } };
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
  generateKeypairPressed() {
    return { type: keypairActionTypes.GENERATE_KEYPAIR_PRESSED };
  },
  generateNewKeypairPressed() {
    return { type: keypairActionTypes.GENERATE_NEW_KEYPAIR_PRESSED };
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
  confirmDeleteKeypairPressed() {
    return { type: keypairActionTypes.CONFIRM_DELETE_KEYPAIR_PRESSED };
  },
  saveFriendPublicKeyPressed(label, publicKey) {
    return {
      type: keypairActionTypes.SAVE_FRIEND_PUBLIC_KEY_PRESSED,
      payload: { label, publicKey },
    };
  },
  deleteFriendPublicKeyPressed(label) {
    return { type: keypairActionTypes.DELETE_FRIEND_PUBLIC_KEY_PRESSED, payload: { label } };
  },
  setActivePublicKey(label) {
    return { type: keypairActionTypes.SET_ACTIVE_PUBLIC_KEY, payload: { label } };
  },
  changeActivePublicKeyPressed(label) {
    return { type: keypairActionTypes.CHANGE_ACTIVE_PUBLIC_KEY_PRESSED, payload: { label } };
  },
};
