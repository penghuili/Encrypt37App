import { all } from 'redux-saga/effects';

import { keypairSagas } from './keypair/keypairSaga';
import { textSagas } from './text/textSaga';

export function* sagas() {
  yield all([keypairSagas(), textSagas()]);
}
