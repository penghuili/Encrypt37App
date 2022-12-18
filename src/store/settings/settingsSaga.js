import { Linking } from 'react-native';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { cachePath, emptyFolder, getFolderSize, getSizeText } from '../../lib/file';
import { LocalStorage, LocalStorageKeys } from '../../lib/localstorage';
import { navigationRef } from '../../router/navigationRef';
import { routeNames } from '../../router/routes';
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

function* handleManageKeypairsPressed() {
  yield call(navigationRef.navigate, routeNames.keypairs);
}

function* handleChangeThemePressed() {
  yield call(navigationRef.navigate, routeNames.changeTheme);
}

function* handleSaveThemePressed({ payload: { mode } }) {
  yield call(LocalStorage.set, LocalStorageKeys.theme, mode);
  yield put(settingsActionCreators.setTheme(mode));
}

function* handleContactPressed() {
  yield call(Linking.openURL, 'mailto:peng@duck.com');
}

function* handlePrivacyPressed() {
  yield call(
    Linking.openURL,
    'https://github.com/penghuili/Encrypt37/blob/master/PRIVACYPOLICY.md'
  );
}

export function* settingsSagas() {
  yield fork(initSettings);

  yield all([
    takeLatest(settingsActionTypes.READ_CACHE_SIZE, handleReadCacheSize),
    takeLatest(settingsActionTypes.CLEAR_CACHE_PRESSED, handleClearCachePressed),
    takeLatest(settingsActionTypes.MANAGE_KEYPAIRS_PRESSED, handleManageKeypairsPressed),
    takeLatest(settingsActionTypes.CHANGE_THEME_PRESSED, handleChangeThemePressed),
    takeLatest(settingsActionTypes.SAVE_THEME_PRESSED, handleSaveThemePressed),
    takeLatest(settingsActionTypes.CONTACT_PRESSED, handleContactPressed),
    takeLatest(settingsActionTypes.PRIVACY_PRESSED, handlePrivacyPressed),
  ]);
}
