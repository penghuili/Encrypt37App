import { settingsActionTypes } from './settingsActions';

const initialState = {
  cacheSize: null,
};

function handleSetCacheSize(state, { size }) {
  return { ...state, cacheSize: size };
}
export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case settingsActionTypes.SET_CACHE_SIZE:
      return handleSetCacheSize(state, action.payload);

    default:
      return state;
  }
}
