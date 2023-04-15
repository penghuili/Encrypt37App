export const settingsActionTypes = {
  READ_CACHE_SIZE: 'settings/READ_CACHE_SIZE',
  SET_CACHE_SIZE: 'settings/SET_CACHE_SIZE',
  CLEAR_CACHE_PRESSED: 'settings/CLEAR_CACHE_PRESSED',
  SAVE_THEME_PRESSED: 'settings/SAVE_THEME_PRESSED',
  SET_THEME: 'settings/SET_THEME',
  NAVIGATE: 'settings/NAVIGATE',
};

export const settingsActionCreators = {
  readCacheSize() {
    return { type: settingsActionTypes.READ_CACHE_SIZE };
  },
  setCacheSize(size) {
    return { type: settingsActionTypes.SET_CACHE_SIZE, payload: { size } };
  },
  clearCachePressed() {
    return { type: settingsActionTypes.CLEAR_CACHE_PRESSED };
  },
  saveThemePressed(mode) {
    return { type: settingsActionTypes.SAVE_THEME_PRESSED, payload: { mode } };
  },
  setTheme(mode) {
    return { type: settingsActionTypes.SET_THEME, payload: { mode } };
  },
  navigate(routeName, params) {
    return { type: settingsActionTypes.NAVIGATE, payload: { routeName, params } };
  },
};
