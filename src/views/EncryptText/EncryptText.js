import React from 'react';
import { Button, Divider, IconButton, Text, TextInput } from 'react-native-paper';

import ActivePublicKey from '../../components/ActivePublicKey';
import Box from '../../components/Box';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { copyToClipboard, readFromClipboard } from '../../lib/clipboard';

export default function EncryptText({
  text,
  encryptedText,
  onTextChange,
  onEncryptedTextChange,
  onEncryptText,
  onDecryptText,
  onShare,
  onToast,
}) {
  return (
    <ScreenWrapper title="Encrypt text">
      <ActivePublicKey />

      <Text variant="headlineLarge">Encrypt</Text>
      <Spacer size={8} />
      <TextInput
        label="Text"
        multiline
        numberOfLines={5}
        value={text}
        onChangeText={onTextChange}
      />
      <Spacer />

      <Box direction="row" align="center">
        <Button
          mode="contained"
          icon="chevron-down"
          contentStyle={{ flexDirection: 'row-reverse' }}
          disabled={!text}
          onPress={() => onEncryptText(text)}
        >
          Encrypt
        </Button>
        <IconButton icon="export-variant" disabled={!text} onPress={() => onShare(text)} />
        <IconButton
          icon="content-copy"
          disabled={!text}
          onPress={() => {
            if (text) {
              copyToClipboard(text);
              onToast('Message is copied.');
            }
          }}
        />
        <IconButton
          icon="content-paste"
          onPress={async () => {
            const m = await readFromClipboard(encryptedText);
            if (m) {
              onTextChange(m);
            }
          }}
        />
        <IconButton
          icon="close"
          disabled={!text}
          onPress={async () => {
            onTextChange('');
          }}
        />
      </Box>

      <Spacer />
      <Divider />
      <Spacer />

      <Text variant="headlineLarge">Decrypt</Text>
      <Spacer size={8} />
      <Box direction="row" align="center">
        <Button
          mode="contained"
          icon="chevron-up"
          contentStyle={{ flexDirection: 'row-reverse' }}
          disabled={!encryptedText}
          onPress={() => onDecryptText(encryptedText)}
        >
          Decrypt
        </Button>
        <IconButton
          icon="export-variant"
          disabled={!encryptedText}
          onPress={() => onShare(encryptedText)}
        />
        <IconButton
          icon="content-copy"
          disabled={!encryptedText}
          onPress={() => {
            if (encryptedText) {
              copyToClipboard(encryptedText);
              onToast('Encrypted message is copied.');
            }
          }}
        />
        <IconButton
          icon="content-paste"
          onPress={async () => {
            const m = await readFromClipboard(encryptedText);
            if (m) {
              onEncryptedTextChange(m);
            }
          }}
        />
        <IconButton
          icon="close"
          disabled={!encryptedText}
          onPress={async () => {
            onEncryptedTextChange('');
          }}
        />
      </Box>
      <Box pb="16">{!!encryptedText && <Text selectable>{encryptedText}</Text>}</Box>
    </ScreenWrapper>
  );
}
