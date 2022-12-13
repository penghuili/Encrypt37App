import { all, call, put, takeLatest } from 'redux-saga/effects';
import { cachePath, emptyFolder, getFolderSize, getSizeText } from '../../lib/file';
import { navigationRef } from '../../router/navigationRef';
import { routeNames } from '../../router/routes';
import { fileActionCreators } from '../file/fileActions';

import { settingsActionCreators, settingsActionTypes } from './settingsActions';

function* handleReadCacheSize() {
  const size = yield call(getFolderSize, cachePath);
  yield put(settingsActionCreators.setCacheSize(getSizeText(size)));
}

function* handleClearCachePressed() {
  yield call(emptyFolder, cachePath);
  yield put(settingsActionCreators.setCacheSize(null));
  yield put(fileActionCreators.setPickedFiles([]));
  yield put(fileActionCreators.setEncryptedFiles([]));
}

function* handleManageKeypairsPressed() {
  yield call(navigationRef.navigate, routeNames.keypairs);
}

export function* settingsSagas() {
  yield all([
    takeLatest(settingsActionTypes.READ_CACHE_SIZE, handleReadCacheSize),
    takeLatest(settingsActionTypes.CLEAR_CACHE_PRESSED, handleClearCachePressed),
    takeLatest(settingsActionTypes.MANAGE_KEYPAIRS_PRESSED, handleManageKeypairsPressed),
  ]);
}
