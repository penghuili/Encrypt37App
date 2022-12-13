import { extractFileNameAndExtension, imageExtensions } from '../../lib/file';
import { fileActionTypes } from './fileActions';

const initialState = {
  pickedFiles: {
    images: [],
    files: [],
  },
  encryptedFiles: [],
};

function handleSetPickedFiles(state, { files: picked }) {
  const images = [];
  const files = [];
  picked.forEach(f => {
    const { extensionWithoutDot } = extractFileNameAndExtension(f.name);
    if (imageExtensions.includes(extensionWithoutDot)) {
      images.push(f);
    } else {
      files.push(f);
    }
  });
  return { ...state, pickedFiles: { images, files } };
}

function handleSetEncryptedFiles(state, { encryptedFiles }) {
  return { ...state, encryptedFiles };
}

export function fileReducer(state = initialState, action) {
  switch (action.type) {
    case fileActionTypes.SET_PICKED_FILES:
      return handleSetPickedFiles(state, action.payload);
    case fileActionTypes.SET_ENCRYPTED_FILES:
      return handleSetEncryptedFiles(state, action.payload);

    default:
      return state;
  }
}
