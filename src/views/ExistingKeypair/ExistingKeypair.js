import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Divider, IconButton, Modal, Portal, Text, useTheme } from 'react-native-paper';

import Box from '../../components/Box';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { readFromClipboard } from '../../lib/clipboard';

export default function ExistingKeypair({
  privateKey,
  publicKey,
  onPastePublicKey,
  onPastePrivateKey,
  onFinish,
  onToast,
}) {
  const theme = useTheme();
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showPublicKey, setShowPublicKey] = useState(false);

  return (
    <ScreenWrapper hasBack title="Add existing key pair">
      <Box>
        <Button
          icon="content-paste"
          mode="outlined"
          onPress={async () => {
            const key = await readFromClipboard();
            if (key) {
              onPastePublicKey(key);
            } else {
              onToast('Nothing is in clipboard.');
            }
          }}
        >
          Paste public key
        </Button>
        {!!publicKey && (
          <>
            <Spacer />
            <Text variant="headlineLarge">Public key:</Text>
            <Text variant="bodySmall" numberOfLines={5}>
              {publicKey}
            </Text>
          </>
        )}

        <Spacer />
        <Button
          icon="content-paste"
          mode="outlined"
          onPress={async () => {
            const key = await readFromClipboard();
            if (key) {
              onPastePrivateKey(key);
            } else {
              onToast('Nothing is in clipboard.');
            }
          }}
        >
          Paste private key
        </Button>
        {!!privateKey && (
          <>
            <Spacer />
            <Text variant="headlineLarge">Private key:</Text>
            <Text variant="bodySmall" numberOfLines={5}>
              {privateKey}
            </Text>
          </>
        )}
      </Box>

      {!!publicKey && !!privateKey && (
        <>
          <Divider />
          <Spacer />
          <Box>
            <Button icon="check" mode="outlined" onPress={onFinish}>
              Finish
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
