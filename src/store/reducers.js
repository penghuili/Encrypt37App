import { combineReducers } from 'redux';

import { keypairReducer } from './keypair/keypairReducer';
import { textReducer } from './text/textReducer';
import { toastReducer } from './toast/toastReducer';

export const reducers = combineReducers({
  keypair: keypairReducer,
  text: textReducer,
  toast: toastReducer,
});
