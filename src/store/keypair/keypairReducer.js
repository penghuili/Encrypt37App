import { keypairActionTypes } from './keypairActions';

const initialState = {
  privateKey: '',
  publicKey: '',
  publicKeys: [],
  activePublicKey: null,
  isPending: true,
  hasDoneBackup: false,
};

function handleSetPrivateKey(state, { privateKey }) {
  return { ...state, privateKey };
}

function handleSetPublicKey(state, { publicKey }) {
  return { ...state, publicKey };
}

function handleSetPublicKeys(state, { publicKeys }) {
  return { ...state, publicKeys };
}

function handleFinishLoading(state) {
  return { ...state, isPending: false };
}

function handleFinishBackup(state, { finished }) {
  return { ...state, hasDoneBackup: finished };
}

function handleSetActivePublicKey(state, { label }) {
  return { ...state, activePublicKey: label };
}

export function keypairReducer(state = initialState, action) {
  switch (action.type) {
    case keypairActionTypes.SET_PRIVATE_KEY:
      return handleSetPrivateKey(state, action.payload);

    case keypairActionTypes.SET_PUBLIC_KEY:
      return handleSetPublicKey(state, action.payload);

    case keypairActionTypes.SET_PUBLIC_KEYS:
      return handleSetPublicKeys(state, action.payload);

    case keypairActionTypes.FINISH_LOADING:
      return handleFinishLoading(state);

    case keypairActionTypes.SET_BACKUP:
      return handleFinishBackup(state, action.payload);

    case keypairActionTypes.SET_ACTIVE_PUBLIC_KEY:
      return handleSetActivePublicKey(state, action.payload);

    default:
      return state;
  }
}
