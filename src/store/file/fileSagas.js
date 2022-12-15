import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { encrypt37Extension } from '../../lib/constants';
import { decryptFiles, encryptFiles, encryptionStatus } from '../../lib/encryption';
import { deleteFiles, pickFiles, pickImages, shareFile, takePhoto } from '../../lib/file';
import { keypairSelectors } from '../keypair/keypairSelectors';
import { toastActionCreators } from '../toast/toastActions';
import { fileActionCreators, fileActionTypes } from './fileActions';
import { fileSelectors } from './fileSelectors';

function* handleLoadImageLibraryPressed() {
  const images = yield call(pickImages);
  if (!images?.length) {
    yield put(toastActionCreators.setToast('No images are selected.'));
    return;
  }

  yield put(fileActionCreators.setPickedFiles(images));
}

function* handlePickEncryptedFilesPressed() {
  const files = yield call(pickFiles);
  const encryptedFiles = files.filter(f => f.name.endsWith(encrypt37Extension));
  yield put(fileActionCreators.setEncryptedFiles(encryptedFiles));

  if (encryptedFiles.length !== files.length) {
    yield put(toastActionCreators.setToast('Only pick files end with .e37'));
    return;
  }
}

function* handleTakePhotoPressed() {
  const file = yield call(takePhoto);
  if (file) {
    yield put(fileActionCreators.setPickedFiles([file]));
  }
}

function* handlePickOriginalFilesPressed() {
  const files = yield call(pickFiles);
  const originalFiles = files.filter(f => !f.name.endsWith(encrypt37Extension));
  yield put(fileActionCreators.setPickedFiles(originalFiles));
}

function* handleEncryptPressed({ payload: { files } }) {
  if (!files?.length) {
    return;
  }

  const publicKey = yield select(keypairSelectors.getActivePublicKey);
  const encrypted = yield call(encryptFiles, files, publicKey);
  yield put(fileActionCreators.setEncryptedFiles(encrypted));

  const succeeded = encrypted.filter(f => f.status === encryptionStatus.SUCCEEDED);
  if (succeeded.length === files.length) {
    yield put(toastActionCreators.setToast('All files are encrypted.'));
  } else {
    yield put(toastActionCreators.setToast('Some files have problems.'));
  }
}

function* handleDecryptPressed({ payload: { files } }) {
  if (!files?.length) {
    return;
  }

  const privateKey = yield select(keypairSelectors.getPrivateKey);
  const decrypted = yield call(decryptFiles, files, privateKey);
  yield put(fileActionCreators.setPickedFiles(decrypted));

  const succeeded = decrypted.filter(f => f.status === encryptionStatus.SUCCEEDED);
  if (succeeded.length === files.length) {
    yield put(toastActionCreators.setToast('All files are decrypted.'));
  } else {
    yield put(toastActionCreators.setToast('Some files have problems.'));
  }
}

function* handleShareFilePressed({ payload: { file } }) {
  const success = yield call(shareFile, file);
  if (success) {
    yield put(toastActionCreators.setToast('Share file succeeded.'));
  }
}

function* handleClearPickedFilesPressed() {
  const pickedFiles = yield select(fileSelectors.getPickedFiles);
  yield call(deleteFiles, pickedFiles);
  yield put(fileActionCreators.setPickedFiles([]));
}

function* handleClearEncryptedFilesPressed() {
  const encryptedFiles = yield select(fileSelectors.getEncryptedFiles);
  yield call(deleteFiles, encryptedFiles);
  yield put(fileActionCreators.setEncryptedFiles([]));
}

export function* fileSagas() {
  yield all([
    takeLatest(fileActionTypes.LOAD_IMAGE_LIBRARY_PRESSED, handleLoadImageLibraryPressed),
    takeLatest(fileActionTypes.ENCRYPT_PRESSED, handleEncryptPressed),
    takeLatest(fileActionTypes.DECRYPT_PRESSED, handleDecryptPressed),
    takeLatest(fileActionTypes.SHARE_FILE_PRESSED, handleShareFilePressed),
    takeLatest(fileActionTypes.PICK_ENCRYPTED_FILES_PRESSED, handlePickEncryptedFilesPressed),
    takeLatest(fileActionTypes.TAKE_PHOTO_PRESSED, handleTakePhotoPressed),
    takeLatest(fileActionTypes.PICK_ORIGINAL_FILES_PRESSED, handlePickOriginalFilesPressed),
    takeLatest(fileActionTypes.CLEAR_PICKED_FILES_PRESSED, handleClearPickedFilesPressed),
    takeLatest(fileActionTypes.CLEAR_ENCRYPTED_FILES_PRESSED, handleClearEncryptedFilesPressed),
  ]);
}
