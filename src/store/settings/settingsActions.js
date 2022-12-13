export const settingsActionTypes = {
  READ_CACHE_SIZE: 'settings/READ_CACHE_SIZE',
  SET_CACHE_SIZE: 'settings/SET_CACHE_SIZE',
  CLEAR_CACHE_PRESSED: 'settings/CLEAR_CACHE_PRESSED',
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
};
