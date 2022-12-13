import React, { useState } from 'react';
import { FAB, Portal } from 'react-native-paper';

import { bottomTabbarHeight } from '../../../../lib/constants';

export default function AddFile({
  show,
  onTakePhoto,
  onPickImages,
  onPickFiles,
  onPickEncryptedFiles,
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!show) {
    return null;
  }

  return (
    <Portal>
      <FAB.Group
        open={isOpen}
        visible
        icon={isOpen ? 'close' : 'plus'}
        actions={[
          { icon: 'camera', label: 'Take photo', onPress: onTakePhoto },
          {
            icon: 'image',
            label: 'Pick images',
            onPress: onPickImages,
          },
          {
            icon: 'file-multiple',
            label: 'Pick files',
            onPress: onPickFiles,
          },
          {
            icon: 'file-lock',
            label: 'Pick files to decrypt',
            onPress: onPickEncryptedFiles,
          },
        ]}
        onStateChange={({ open }) => setIsOpen(open)}
        style={{ bottom: bottomTabbarHeight + 36 }}
      />
    </Portal>
  );
}
