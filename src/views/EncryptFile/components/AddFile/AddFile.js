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
          { icon: 'camera', onPress: onTakePhoto },
          {
            icon: 'image',
            onPress: onPickImages,
          },
          {
            icon: 'file-multiple',
            onPress: onPickFiles,
          },
          {
            icon: 'file-lock',
            onPress: onPickEncryptedFiles,
          },
        ]}
        onStateChange={({ open }) => setIsOpen(open)}
        style={{ bottom: bottomTabbarHeight + 36 }}
      />
    </Portal>
  );
}
