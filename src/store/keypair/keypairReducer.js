import { keypairActionTypes } from './keypairActions';

const initialState = {
  privateKey: '',
  publicKey: '',
  isPending: true,
  hasDoneBackup: false,
};

function handleSetPrivateKey(state, { privateKey }) {
  return { ...state, privateKey };
}

function handleSetPublicKey(state, { publicKey }) {
  return { ...state, publicKey };
}

function handleFinishLoading(state) {
  return { ...state, isPending: false };
}

function handleFinishBackup(state, { finished }) {
  return { ...state, hasDoneBackup: finished };
}

export function keypairReducer(state = initialState, action) {
  switch (action.type) {
    case keypairActionTypes.SET_PRIVATE_KEY:
      return handleSetPrivateKey(state, action.payload);

    case keypairActionTypes.SET_PUBLIC_KEY:
      return handleSetPublicKey(state, action.payload);

    case keypairActionTypes.FINISH_LOADING:
      return handleFinishLoading(state);

    case keypairActionTypes.SET_BACKUP:
      return handleFinishBackup(state, action.payload);

    default:
      return state;
  }
}
