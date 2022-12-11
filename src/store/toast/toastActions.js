export const toastActionTypes = {
  SET_TOAST: 'toast/SET_TOAST',
};

export const toastActionCreators = {
  setToast(message) {
    return { type: toastActionTypes.SET_TOAST, payload: { message } };
  },
};
