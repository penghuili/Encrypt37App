export const settingsActionTypes = {
  READ_CACHE_SIZE: 'settings/READ_CACHE_SIZE',
  SET_CACHE_SIZE: 'settings/SET_CACHE_SIZE',
  CLEAR_CACHE_PRESSED: 'settings/CLEAR_CACHE_PRESSED',
  MANAGE_KEYPAIRS_PRESSED: 'settings/MANAGE_KEYPAIRS_PRESSED',
  CHANGE_THEME_PRESSED: 'settings/CHANGE_THEME_PRESSED',
  SAVE_THEME_PRESSED: 'settings/SAVE_THEME_PRESSED',
  SET_THEME: 'settings/SET_THEME',
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
  manageKeypairPressed() {
    return { type: settingsActionTypes.MANAGE_KEYPAIRS_PRESSED };
  },
  changeThemePressed() {
    return { type: settingsActionTypes.CHANGE_THEME_PRESSED };
  },
  saveThemePressed(mode) {
    return { type: settingsActionTypes.SAVE_THEME_PRESSED, payload: { mode } };
  },
  setTheme(mode) {
    return { type: settingsActionTypes.SET_THEME, payload: { mode } };
  },
};
