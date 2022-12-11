import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Divider, IconButton, Modal, Portal, Text, useTheme } from 'react-native-paper';

import Box from '../../components/Box';
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
  const theme = useTheme();
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showPublicKey, setShowPublicKey] = useState(false);

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
          <Text variant="headlineLarge">Public key:</Text>
          <Text variant="bodySmall" numberOfLines={5}>
            {publicKey}
          </Text>
          <Box direction="row">
            <IconButton icon="eye" onPress={() => setShowPublicKey(true)} />
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
          <Text variant="headlineLarge">Private key:</Text>
          <Text variant="bodySmall" numberOfLines={5}>
            {privateKey}
          </Text>
          <Box direction="row">
            <IconButton icon="eye" onPress={() => setShowPrivateKey(true)} />
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

      <Portal>
        <Modal
          visible={showPrivateKey || showPublicKey}
          onDismiss={() => {
            setShowPrivateKey(false);
            setShowPublicKey(false);
          }}
        >
          <ScrollView style={{ backgroundColor: theme.colors.background }}>
            <Box px="4">
              <IconButton
                icon="close"
                onPress={() => {
                  setShowPrivateKey(false);
                  setShowPublicKey(false);
                }}
              />
              {showPrivateKey && (
                <>
                  <Text variant="headlineLarge">Private key:</Text>
                  <Text variant="bodySmall">{privateKey}</Text>
                </>
              )}

              {showPublicKey && (
                <>
                  <Text variant="headlineLarge">Public key:</Text>
                  <Text variant="bodySmall">{publicKey}</Text>
                </>
              )}
            </Box>
          </ScrollView>
        </Modal>
      </Portal>
    </ScreenWrapper>
  );
}
