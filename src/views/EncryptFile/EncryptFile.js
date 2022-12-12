import React from 'react';
import { Image, Pressable } from 'react-native';
import { Button, Divider, IconButton, List, Text, useTheme } from 'react-native-paper';

import Box from '../../components/Box';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { encryptionStatus, ENCRYPTION_SIZE_LIMIT_IN_MEGA_BYTES } from '../../lib/encryption';

export default function EncryptFile({
  pickedFiles,
  encryptedFiles,
  onTakePhoto,
  onPickImages,
  onPickFiles,
  onPickEncryptedFiles,
  onEncrypt,
  onDecrypt,
  onShare,
}) {
  const theme = useTheme();

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
  return (
    <ScreenWrapper title="Encrypt file">
      <Text variant="headlineLarge">Encryption</Text>
      <Text>Pick files to encrypt.</Text>
      <Spacer />
      <Box direction="row">
        <IconButton
          mode="outlined"
          icon="camera"
          iconColor={theme.colors.primary}
          onPress={onTakePhoto}
        />
        <IconButton
          mode="outlined"
          icon="image"
          iconColor={theme.colors.primary}
          onPress={onPickImages}
        />
        <IconButton
          mode="outlined"
          icon="file-multiple"
          iconColor={theme.colors.primary}
          onPress={onPickFiles}
        />
      </Box>

      {hasPickedFiles && (
        <>
          <Spacer />

          <Box wrap direction="row">
            {pickedFiles.images.map(image => (
              <Pressable key={image.name} onPress={() => onShare(image)}>
                <Image
                  source={{ uri: image.path }}
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
          <Box>
            <Button
              mode="contained"
              icon="chevron-down"
              contentStyle={{ flexDirection: 'row-reverse' }}
              disabled={!hasPickedFiles}
              onPress={() => onEncrypt([...pickedFiles.images, ...pickedFiles.files])}
            >
              Encrypt
            </Button>
          </Box>
        </>
      )}

      <Spacer />
      <Divider />
      <Spacer />

      <Text variant="headlineLarge">Decryption</Text>
      <Text>Pick files to decrypt. Only pick files that end with .e37</Text>
      <Spacer />
      <Box>
        <IconButton
          mode="outlined"
          icon="file-multiple"
          iconColor={theme.colors.primary}
          onPress={onPickEncryptedFiles}
        />
      </Box>

      {!!encryptedFiles?.length && (
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

          <Spacer />
          <Box>
            <Button
              mode="contained"
              icon="chevron-up"
              contentStyle={{ flexDirection: 'row-reverse' }}
              disabled={!encryptedFiles?.length}
              onPress={() => onDecrypt(encryptedFiles)}
            >
              Decrypt
            </Button>
          </Box>
        </>
      )}
    </ScreenWrapper>
  );
}
