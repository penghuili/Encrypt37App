import React from 'react';
import { Button, Divider } from 'react-native-paper';

import Box from '../../components/Box';
import KeyItem from '../../components/KeyItem';
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
            <KeyItem label="Public key" value={publicKey} />
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
            <KeyItem label="Private key" value={privateKey} />
          </>
        )}
      </Box>

      {!!publicKey && !!privateKey && (
        <>
          <Spacer size={32} />
          <Divider />
          <Spacer size={32} />
          <Box>
            <Button icon="check" mode="outlined" onPress={onFinish}>
              Finish
            </Button>
          </Box>
        </>
      )}
    </ScreenWrapper>
  );
}
