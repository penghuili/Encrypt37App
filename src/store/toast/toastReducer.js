import { toastActionTypes } from './toastActions';

const initialState = {
  message: '',
};

function handleSetToast(state, { message }) {
  return { ...state, message };
}

export function toastReducer(state = initialState, action) {
  switch (action.type) {
    case toastActionTypes.SET_TOAST:
      return handleSetToast(state, action.payload);

    default:
      return state;
  }
}
