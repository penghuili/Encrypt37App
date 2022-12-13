import React from 'react';
import { Button, Divider, IconButton, Text } from 'react-native-paper';

import Box from '../../components/Box';
import KeyItem from '../../components/KeyItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { copyToClipboard } from '../../lib/clipboard';

export default function GenerateKeypair({
  privateKey,
  publicKey,
  onGenerateKeypair,
  onFinish,
  onToast,
}) {
  const hasKeypair = !!privateKey && !!publicKey;
  return (
    <ScreenWrapper hasBack title="Generate keypair">
      <Box>
        <Button mode="outlined" onPress={onGenerateKeypair}>
          {hasKeypair ? 'Generate a new pair' : 'Generate key pair'}
        </Button>
      </Box>

      {hasKeypair && (
        <>
          <Spacer />
          <KeyItem label="Public key" value={publicKey} />
          <Box direction="row">
            <IconButton
              icon="content-copy"
              onPress={() => {
                if (publicKey) {
                  copyToClipboard(publicKey);
                  onToast('Copied!');
                }
              }}
            />
          </Box>

          <Spacer />
          <KeyItem label="Private key" value={privateKey} />
          <Box direction="row">
            <IconButton
              icon="content-copy"
              onPress={() => {
                if (privateKey) {
                  copyToClipboard(privateKey);
                  onToast('Copied!');
                }
              }}
            />
          </Box>
          <Spacer />

          <Divider />
          <Spacer />

          <Text variant="bodySmall">
            You can share the public key with others, so they can encrypt something with your public
            key. Only you can decrypt it.
          </Text>
          <Text variant="bodySmall">But NEVER SHARE YOUR PRIVATE KEY WITH ANYONE.</Text>
          <Spacer />
          <Text variant="bodySmall">Backup your key pair, save them to a password manager.</Text>
          <Spacer />
          <Box>
            <Button mode="outlined" onPress={onFinish}>
              I have saved my key pair in a safe place
            </Button>
          </Box>
        </>
      )}
    </ScreenWrapper>
  );
}
