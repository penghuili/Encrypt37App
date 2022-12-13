export const fileActionTypes = {
  LOAD_IMAGE_LIBRARY_PRESSED: 'file/LOAD_IMAGE_LIBRARY_PRESSED',
  SET_PICKED_FILES: 'file/SET_PICKED_FILES',
  ENCRYPT_PRESSED: 'file/ENCRYPT_PRESSED',
  SET_ENCRYPTED_FILES: 'file/SET_ENCRYPTED_FILES',
  DECRYPT_PRESSED: 'file/DECRYPT_PRESSED',
  SHARE_FILE_PRESSED: 'file/SHARE_FILE_PRESSED',
  PICK_ENCRYPTED_FILES_PRESSED: 'file/PICK_ENCRYPTED_FILES_PRESSED',
  TAKE_PHOTO_PRESSED: 'file/TAKE_PHOTO_PRESSED',
  PICK_ORIGINAL_FILES_PRESSED: 'file/PICK_ORIGINAL_FILES_PRESSED',
  CLEAR_PICKED_FILES_PRESSED: 'file/CLEAR_PICKED_FILES_PRESSED',
  CLEAR_ENCRYPTED_FILES_PRESSED: 'file/CLEAR_ENCRYPTED_FILES_PRESSED',
};

export const fileActionCreators = {
  loadImageLibraryPressed() {
    return { type: fileActionTypes.LOAD_IMAGE_LIBRARY_PRESSED };
  },
  setPickedFiles(files) {
    return { type: fileActionTypes.SET_PICKED_FILES, payload: { files } };
  },
  encryptPressed(files) {
    return { type: fileActionTypes.ENCRYPT_PRESSED, payload: { files } };
  },
  setEncryptedFiles(encryptedFiles) {
    return { type: fileActionTypes.SET_ENCRYPTED_FILES, payload: { encryptedFiles } };
  },
  decryptPressed(files) {
    return { type: fileActionTypes.DECRYPT_PRESSED, payload: { files } };
  },
  shareFilePressed(file) {
    return { type: fileActionTypes.SHARE_FILE_PRESSED, payload: { file } };
  },
  pickEncryptedFilesPressed() {
    return { type: fileActionTypes.PICK_ENCRYPTED_FILES_PRESSED };
  },
  takePhotoPressed() {
    return { type: fileActionTypes.TAKE_PHOTO_PRESSED };
  },
  pickOriginalFilesPressed() {
    return { type: fileActionTypes.PICK_ORIGINAL_FILES_PRESSED };
  },
  clearPickedFilesPressed() {
    return { type: fileActionTypes.CLEAR_PICKED_FILES_PRESSED };
  },
  clearEncryptedFilesPressed() {
    return { type: fileActionTypes.CLEAR_ENCRYPTED_FILES_PRESSED };
  },
};
