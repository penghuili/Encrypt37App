import React from 'react';
import { IconButton, Text } from 'react-native-paper';

import ListItem from '../../../components/ListItem';
import { ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES, encryptionStatus } from '../../../lib/encryption';

export default function FileItem({ file, onShare }) {
  function renderDescription() {
    switch (file.status) {
      case encryptionStatus.DECRYPT_FAILED:
        return (
          <Text>Decryption failed. Make sure this file is encrypted with your public key.</Text>
        );

      case encryptionStatus.ENCRYPT_FAILED:
        return <Text>Encryption failed. Make sure you are a valid public key.</Text>;

      case encryptionStatus.TOO_LARGE:
        return <Text>File is bigger than {ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES}MB.</Text>;

      case encryptionStatus.WRONG_FILE:
        return <Text>Only pick files end with .e37</Text>;

      default:
        return null;
    }
  }

  return (
    <ListItem
      right={
        file.status === encryptionStatus.SUCCEEDED ? (
          <IconButton icon="export-variant" onPress={() => onShare(file)} />
        ) : null
      }
    >
      <Text>{file.name}</Text>
      {renderDescription()}
    </ListItem>
  );
}
