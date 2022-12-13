import { format } from 'date-fns';
import DocumentPicker, { types } from 'react-native-document-picker';
import FS, { CachesDirectoryPath } from 'react-native-fs';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Share from 'react-native-share';
import { asyncForEach } from './array';

import { encrypt37Extension } from './constants';

export const cachePath = CachesDirectoryPath;

export const imageExtensions = ['gif', 'heic', 'jpg', 'jpeg', 'png', 'psd', 'webp'];

function extractFilePath(path) {
  if (path.startsWith('file:///')) {
    return path.slice(7);
  } else if (path.startsWith('file://')) {
    return path.slice(6);
  } else if (path.startsWith('file:/')) {
    return path.slice(5);
  }
  return path;
}

export function extractFileNameAndExtension(name) {
  if (!name) {
    return {
      fileName: '',
      extension: '',
      extensionWithoutDot: '',
    };
  }

  const parts = name.split('.');
  const last = (parts[parts.length - 1] || '').toLowerCase();
  let extension = '';
  let extensionWithoutDot = '';

  if (last === encrypt37Extension) {
    extension = `.${encrypt37Extension}`;
    extensionWithoutDot = encrypt37Extension;
    parts.pop();
  }

  if (parts.length === 1) {
    return name.startsWith('.')
      ? {
          fileName: '',
          extension: `.${parts[0]}${extension}`,
          extensionWithoutDot: `${parts[0]}${extension}`,
        }
      : { fileName: parts[0], extension, extensionWithoutDot };
  }

  return {
    fileName: parts.slice(0, parts.length - 1).join('.'),
    extension: `.${parts[parts.length - 1]}${extension}`,
    extensionWithoutDot: `${parts[parts.length - 1]}${extension}`,
  };
}

export async function getFolderSize(folderPath) {
  if (!folderPath) {
    return 0;
  }

  try {
    const info = await FS.stat(folderPath);
    if (info.isFile()) {
      return info.size;
    }

    const filesOrFolders = await FS.readDir(folderPath);
    if (!filesOrFolders.length) {
      return 0;
    }

    let size = 0;
    for (let i = 0; i < filesOrFolders.length; i += 1) {
      const fileOrFolder = filesOrFolders[i];
      if (fileOrFolder.isFile()) {
        size += fileOrFolder.size;
      } else {
        const folderSize = await getFolderSize(fileOrFolder.path);
        size += folderSize;
      }
    }

    return size;
  } catch (e) {
    return 0;
  }
}

function toFixed2(number) {
  return +number.toFixed(2);
}

export function getSizeText(size) {
  if (!size) {
    return '0KB';
  }

  const kbs = size / 1024;
  if (kbs < 1024) {
    return `${toFixed2(kbs)}KB`;
  }

  return `${toFixed2(kbs / 1024)}MB`;
}

export async function emptyFolder(folderPath) {
  try {
    const filesOrFolders = await FS.readDir(folderPath);
    if (!filesOrFolders.length) {
      return;
    }

    for (let i = 0; i < filesOrFolders.length; i += 1) {
      try {
        await FS.unlink(filesOrFolders[i].path);
      } catch (e) {}
    }
  } catch (e) {}
}

export async function statFile(path) {
  try {
    const info = await FS.stat(path);
    return { ...info, name: info.path.split('/').pop() };
  } catch (e) {
    console.log('stat file failed', e);
    return null;
  }
}

export async function moveFile(src, dest) {
  try {
    const exists = await FS.exists(dest);
    if (exists) {
      await FS.unlink(dest);
    }
    await FS.moveFile(src, dest);
    return true;
  } catch (e) {
    console.log('move file failed', e);
    return false;
  }
}

export async function deleteFile(path) {
  if (!path) {
    return;
  }

  try {
    const exists = await FS.exists(path);
    if (exists) {
      await FS.unlink(path);
    }
  } catch (e) {
    console.log(`delete ${path} failed`, e);
  }
}

export async function deleteFiles(files) {
  if (!files?.length) {
    return;
  }

  await asyncForEach(
    files.map(f => f.path),
    async path => {
      await deleteFile(path);
    }
  );
}

export async function shareFile({ name, path }) {
  try {
    const { success } = await Share.open({
      title: name,
      filename: name,
      url: `file://${path}`,
      failOnCancel: false,
    });

    return !!success;
  } catch (e) {
    console.log('share file failed', e);
    return false;
  }
}

export async function shareText(text) {
  try {
    const { success } = await Share.open({
      message: text,
      failOnCancel: false,
    });

    return !!success;
  } catch (e) {
    console.log('share text failed', e);
    return false;
  }
}

export async function pickImages() {
  try {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
      selectionLimit: 0,
      includeBase64: false,
      saveToPhotos: false,
    });

    if (result?.assets) {
      return result?.assets.map(f => ({
        type: f.type,
        name: f.fileName,
        size: f.fileSize,
        path: extractFilePath(f.uri),
        uri: f.uri,
      }));
    }

    return [];
  } catch (e) {
    console.log('pick images failed', e);
    return [];
  }
}

export async function pickFiles({ allowMultiSelection = true } = {}) {
  try {
    const result = await DocumentPicker.pick({
      allowMultiSelection,
      type: types.allFiles,
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    });

    const mapped = result.map(f => ({
      name: f.name,
      size: f.size,
      path: extractFilePath(f.fileCopyUri),
    }));

    return mapped;
  } catch (e) {
    console.log('pick files failed', e);
    return [];
  }
}

export async function takePhoto() {
  try {
    const result = await launchCamera({
      mediaType: 'photo',
      selectionLimit: 1,
      saveToPhotos: false,
    });

    const raw = result?.assets?.[0];
    if (raw) {
      const { extension } = extractFileNameAndExtension(raw.fileName);
      const name = `${format(new Date(), 'yyyyMMdd_HHmmss')}${extension}`;
      const path = `${cachePath}/${name}`;
      const success = await moveFile(extractFilePath(raw.uri), path);

      if (success) {
        return {
          type: raw.type,
          name,
          size: raw.fileSize,
          path,
        };
      }
    }

    return null;
  } catch (e) {
    console.log('take photo failed', e);
    return null;
  }
}
