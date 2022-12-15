import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { Button, Divider, IconButton, Text } from 'react-native-paper';

import ActivePublicKey from '../../components/ActivePublicKey';
import Box from '../../components/Box';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import AddFile from './components/AddFile';
import FileItem from './components/FileItem';

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

  const hasPickedFiles = !!pickedFiles.images.length || !!pickedFiles.files.length;
  const hasEncryptedFiles = !!encryptedFiles?.length;
  return (
    <ScreenWrapper title="Encrypt file">
      <ActivePublicKey />

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
            <FileItem key={file.name} file={file} onShare={onShare} />
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
        {hasPickedFiles && (
          <IconButton icon="close" disabled={!hasPickedFiles} onPress={onClearPicked} />
        )}
      </Box>

      <Spacer size={32} />
      <Divider />
      <Spacer size={32} />

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
        {hasEncryptedFiles && (
          <IconButton icon="close" disabled={!hasEncryptedFiles} onPress={onClearEncrypted} />
        )}
      </Box>

      {hasEncryptedFiles && (
        <>
          {encryptedFiles.map(file => (
            <FileItem key={file.name} file={file} onShare={onShare} />
          ))}
        </>
      )}

      <Spacer size={60} />
      <AddFile show={isFocused} />
    </ScreenWrapper>
  );
}
