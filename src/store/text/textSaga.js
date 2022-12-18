import { Keyboard } from 'react-native';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { decryptText, encryptText } from '../../lib/encryption';
import { shareText } from '../../lib/file';
import { keypairSelectors } from '../keypair/keypairSelectors';
import { toastActionCreators } from '../toast/toastActions';
import { textActionCreators, textActionTypes } from './textActions';

function* hanldeEncryptTextPressed({ payload: { text } }) {
  const publicKey = yield select(keypairSelectors.getActivePublicKey);
  const { data } = yield call(encryptText, text.trim(), publicKey);
  if (data) {
    yield put(textActionCreators.setEncryptedText(data));
    yield call(Keyboard.dismiss);

    const activeKey = yield select(keypairSelectors.getActivePublicKeyLabel);
    yield put(
      toastActionCreators.setToast(
        `Message is encrypted. ${
          activeKey
            ? `Share it with ${activeKey}, only ${activeKey} can decrypt.`
            : 'Only you can depryt.'
        }`
      )
    );
  } else {
    yield put(toastActionCreators.setToast('Encryption failed.'));
  }
}

function* hanldeDecryptTextPressed({ payload: { encryptedText } }) {
  const privateKey = yield select(keypairSelectors.getPrivateKey);
  const { data, error } = yield call(decryptText, encryptedText.trim(), privateKey);
  if (error) {
    yield put(
      toastActionCreators.setToast(
        'Decryption failed. Make sure this message is encrypted with your public key.'
      )
    );
  } else {
    yield put(textActionCreators.setText(data));
  }
}

function* handleShareTextPressed({ payload: { text } }) {
  const success = yield call(shareText, text);
  if (success) {
    yield put(toastActionCreators.setToast('Shared!'));
  }
}

export function* textSagas() {
  yield all([
    takeLatest(textActionTypes.ENCRYPT_TEXT_PRESSED, hanldeEncryptTextPressed),
    takeLatest(textActionTypes.DECRYPT_TEXT_PRESSED, hanldeDecryptTextPressed),
    takeLatest(textActionTypes.SHARE_TEXT_PRESSED, handleShareTextPressed),
  ]);
}
