import { combineReducers } from 'redux';
import { fileReducer } from './file/fileReducer';

import { keypairReducer } from './keypair/keypairReducer';
import { settingsReducer } from './settings/settingsReducer';
import { textReducer } from './text/textReducer';
import { toastReducer } from './toast/toastReducer';

export const reducers = combineReducers({
  keypair: keypairReducer,
  text: textReducer,
  file: fileReducer,
  settings: settingsReducer,
  toast: toastReducer,
});
