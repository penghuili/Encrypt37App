import React from 'react';
import { IconButton, List } from 'react-native-paper';

import { ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES, encryptionStatus } from '../../../lib/encryption';

export default function FileItem({ file, onShare }) {
  function renderDescription() {
    switch (file.status) {
      case encryptionStatus.FAILED:
        return 'Decryption failed.';

      case encryptionStatus.TOO_LARGE:
        return `File is bigger than ${ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES}MB.`;

      case encryptionStatus.WRONG_FILE:
        return 'Only pick files end with .e37';

      default:
        return null;
    }
  }

  return (
    <List.Item
      key={file.name}
      title={file.name}
      description={renderDescription()}
      right={() =>
        file.status === encryptionStatus.SUCCEEDED ? (
          <IconButton icon="export-variant" onPress={() => onShare(file)} />
        ) : null
      }
    />
  );
}
