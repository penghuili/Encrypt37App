import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import Box from '../../components/Box';

import KeyItem from '../../components/KeyItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { readFromClipboard } from '../../lib/clipboard';

export default function AddPublicKey({ onSave, onToast }) {
  const [name, setName] = useState('');
  const [publicKey, setPublicKey] = useState('');

  return (
    <ScreenWrapper hasBack title="Add friend's public key">
      <Text>Your friend's name</Text>
      <TextInput label="Text" value={name} onChangeText={setName} />
      <Spacer />
      <Box>
        <Button
          icon="content-paste"
          mode="outlined"
          onPress={async () => {
            const key = await readFromClipboard();
            if (key) {
              setPublicKey(key);
            } else {
              onToast('Nothing is in clipboard.');
            }
          }}
        >
          Paste your friend's public key
        </Button>
        <Spacer />
        {!!publicKey && (
          <>
            <KeyItem label="Public key" value={publicKey} />
            <Spacer />
            <Button
              icon="content-save-check"
              mode="contained"
              disabled={!name || !publicKey}
              onPress={() => onSave(name, publicKey)}
            >
              Save
            </Button>
          </>
        )}
      </Box>
    </ScreenWrapper>
  );
}
