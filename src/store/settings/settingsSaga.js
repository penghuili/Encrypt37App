import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { cachePath, emptyFolder, getFolderSize, getSizeText } from '../../lib/file';
import { LocalStorage, LocalStorageKeys } from '../../lib/localstorage';
import { navigationRef } from '../../router/navigationRef';
import { fileActionCreators } from '../file/fileActions';
import { settingsActionCreators, settingsActionTypes } from './settingsActions';

function* initSettings() {
  const mode = yield call(LocalStorage.get, LocalStorageKeys.theme);
  if (mode) {
    yield put(settingsActionCreators.setTheme(mode));
  }
}

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

function* handleSaveThemePressed({ payload: { mode } }) {
  yield call(LocalStorage.set, LocalStorageKeys.theme, mode);
  yield put(settingsActionCreators.setTheme(mode));
}

function* handleNavigate({ payload: { routeName, params } }) {
  yield call(navigationRef.navigate, routeName, params);
}

export function* settingsSagas() {
  yield fork(initSettings);

  yield all([
    takeLatest(settingsActionTypes.READ_CACHE_SIZE, handleReadCacheSize),
    takeLatest(settingsActionTypes.CLEAR_CACHE_PRESSED, handleClearCachePressed),
    takeLatest(settingsActionTypes.SAVE_THEME_PRESSED, handleSaveThemePressed),
    takeLatest(settingsActionTypes.NAVIGATE, handleNavigate),
  ]);
}
