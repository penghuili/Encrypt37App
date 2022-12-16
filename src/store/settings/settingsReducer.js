import { Appearance } from 'react-native';
import { settingsActionTypes } from './settingsActions';

const initialState = {
  cacheSize: null,
  themeMode: Appearance.getColorScheme() || 'dark',
};

function handleSetCacheSize(state, { size }) {
  return { ...state, cacheSize: size };
}

function handleSaveTheme(state, { mode }) {
  return { ...state, themeMode: mode };
}

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case settingsActionTypes.SET_CACHE_SIZE:
      return handleSetCacheSize(state, action.payload);

    case settingsActionTypes.SET_THEME:
      return handleSaveTheme(state, action.payload);

    default:
      return state;
  }
}
