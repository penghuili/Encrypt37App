import { Keyboard } from 'react-native';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { decryptText, encryptText } from '../../lib/encryption';
import { keypairSelectors } from '../keypair/keypairSelectors';
import { toastActionCreators } from '../toast/toastActions';
import { textActionCreators, textActionTypes } from './textActions';

function* hanldeEncryptTextPressed({ payload: { text } }) {
  const publicKey = yield select(keypairSelectors.getPublicKey);
  const { data } = yield call(encryptText, text, publicKey);
  if (data) {
    yield put(textActionCreators.setEncryptedText(data));
    yield call(Keyboard.dismiss);
  } else {
    yield put(toastActionCreators.setToast('Encryption failed.'));
  }
}

function* hanldeDecryptTextPressed({ payload: { encryptedText } }) {
  const privateKey = yield select(keypairSelectors.getPrivateKey);
  const { data, error } = yield call(decryptText, encryptedText, privateKey);
  if (error) {
    yield put(toastActionCreators.setToast('Decryption failed.'));
  } else {
    yield put(textActionCreators.setText(data));
  }
}

export function* textSagas() {
  yield all([
    takeLatest(textActionTypes.ENCRYPT_TEXT_PRESSED, hanldeEncryptTextPressed),
    takeLatest(textActionTypes.DECRYPT_TEXT_PRESSED, hanldeDecryptTextPressed),
  ]);
}
