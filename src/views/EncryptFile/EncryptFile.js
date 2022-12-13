import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { Button, Divider, IconButton, List, Text } from 'react-native-paper';

import Box from '../../components/Box';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES, encryptionStatus } from '../../lib/encryption';
import AddFile from './components/AddFile';

export default function EncryptFile({
  pickedFiles,
  encryptedFiles,
  onEncrypt,
  onDecrypt,
  onShare,
  onClearPicked,
  onClearEncrypted,
}) {
  const isFocused = useIsFocused();

  function renderDescription(file) {
    switch (file.status) {
      case encryptionStatus.FAILED:
        return 'Encryption failed.';

      case encryptionStatus.TOO_LARGE:
        return `File is bigger than ${ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES}MB.`;

      default:
        return null;
    }
  }

  const hasPickedFiles = !!pickedFiles.images.length || !!pickedFiles.files.length;
  const hasEncryptedFiles = !!encryptedFiles?.length;
  return (
    <ScreenWrapper title="Encrypt file">
      <Text variant="headlineLarge">Encrypt</Text>
      <Text>Pick files to encrypt.</Text>
      <Spacer />

      {hasPickedFiles && (
        <>
          <Box wrap direction="row">
            {pickedFiles.images.map(image => (
              <Pressable key={image.name} onPress={() => onShare(image)}>
                <Image
                  source={{ uri: `file://${image.path}` }}
                  style={{ width: 100, height: 100, marginRight: 4, marginBottom: 4 }}
                />
              </Pressable>
            ))}
          </Box>
          {pickedFiles.files.map(file => (
            <List.Item
              key={file.name}
              title={file.name}
              right={() => <IconButton icon="export-variant" onPress={() => onShare(file)} />}
            />
          ))}

          <Spacer />
        </>
      )}

      <Box direction="row" align="center">
        <Button
          mode="contained"
          icon="chevron-down"
          contentStyle={{ flexDirection: 'row-reverse' }}
          disabled={!hasPickedFiles}
          onPress={() => onEncrypt([...pickedFiles.images, ...pickedFiles.files])}
        >
          Encrypt
        </Button>
        <IconButton icon="close" disabled={!hasPickedFiles} onPress={onClearPicked} />
      </Box>

      <Spacer />
      <Divider />
      <Spacer />

      <Text variant="headlineLarge">Decrypt</Text>
      <Text>Pick files to decrypt. Only pick files that end with .e37</Text>
      <Spacer />

      <Box direction="row" align="center">
        <Button
          mode="contained"
          icon="chevron-up"
          contentStyle={{ flexDirection: 'row-reverse' }}
          disabled={!hasEncryptedFiles}
          onPress={() => onDecrypt(encryptedFiles)}
        >
          Decrypt
        </Button>
        <IconButton icon="close" disabled={!hasEncryptedFiles} onPress={onClearEncrypted} />
      </Box>

      {hasEncryptedFiles && (
        <>
          {encryptedFiles.map(file => (
            <List.Item
              key={file.name}
              title={file.name}
              description={renderDescription(file)}
              right={() =>
                file.status === encryptionStatus.SUCCEEDED ? (
                  <IconButton icon="export-variant" onPress={() => onShare(file)} />
                ) : null
              }
            />
          ))}
        </>
      )}

      <Spacer size={60} />
      <AddFile show={isFocused} />
    </ScreenWrapper>
  );
}
