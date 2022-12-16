import { Appearance } from 'react-native';
import { settingsActionTypes } from './settingsActions';

const initialState = {
  cacheSize: null,
  themeMode: Appearance.getColorScheme() || 'dark',
};

function handleSetCacheSize(state, { size }) {
  return { ...state, cacheSize: size };
}

function handleSaveThemePressed(state, { mode }) {
  return { ...state, themeMode: mode };
}

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case settingsActionTypes.SET_CACHE_SIZE:
      return handleSetCacheSize(state, action.payload);

    case settingsActionTypes.SAVE_THEME_PRESSED:
      return handleSaveThemePressed(state, action.payload);

    default:
      return state;
  }
}
