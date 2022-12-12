import { all } from 'redux-saga/effects';
import { fileSagas } from './file/fileSagas';

import { keypairSagas } from './keypair/keypairSaga';
import { settingsSagas } from './settings/settingsSaga';
import { textSagas } from './text/textSaga';

export function* sagas() {
  yield all([keypairSagas(), textSagas(), fileSagas(), settingsSagas()]);
}
