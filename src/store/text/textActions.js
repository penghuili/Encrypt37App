export const textActionTypes = {
  SET_TEXT: 'text/SET_TEXT',
  SET_ENCRYPT_TEXT: 'text/SET_ENCRYPT_TEXT',

  ENCRYPT_TEXT_PRESSED: 'text/ENCRYPT_TEXT_PRESSED',
  DECRYPT_TEXT_PRESSED: 'text/DECRYPT_TEXT_PRESSED',
};

export const textActionCreators = {
  setText(text) {
    return { type: textActionTypes.SET_TEXT, payload: { text } };
  },
  setEncryptedText(encrypted) {
    return { type: textActionTypes.SET_ENCRYPT_TEXT, payload: { encrypted } };
  },
  encryptTextPressed(text) {
    return { type: textActionTypes.ENCRYPT_TEXT_PRESSED, payload: { text } };
  },

  decryptTextPressed(encryptedText) {
    return { type: textActionTypes.DECRYPT_TEXT_PRESSED, payload: { encryptedText } };
  },
};
