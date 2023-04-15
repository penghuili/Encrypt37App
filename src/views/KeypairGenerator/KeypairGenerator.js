import React from 'react';
import { Button, IconButton } from 'react-native-paper';

import Box from '../../components/Box';
import KeyItem from '../../components/KeyItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { copyToClipboard } from '../../lib/clipboard';

export default function KeypairGenerator({ privateKey, publicKey, onGenerate, onToast }) {
  const hasKeypair = !!privateKey && !!publicKey;
  return (
    <ScreenWrapper hasBack title="Keypair generator">
      <Box>
        <Button mode="outlined" onPress={onGenerate}>
          Generate key pair
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
        </>
      )}
    </ScreenWrapper>
  );
}
