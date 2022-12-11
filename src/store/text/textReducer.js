import { textActionTypes } from './textActions';

const initialState = {
  text: '',
  encryptedText: '',
};

function handleSetText(state, { text }) {
  return { ...state, text };
}

function hanldeSetEncryptText(state, { encrypted }) {
  return { ...state, encryptedText: encrypted };
}

export function textReducer(state = initialState, action) {
  switch (action.type) {
    case textActionTypes.SET_TEXT:
      return handleSetText(state, action.payload);
    case textActionTypes.SET_ENCRYPT_TEXT:
      return hanldeSetEncryptText(state, action.payload);

    default:
      return state;
  }
}
