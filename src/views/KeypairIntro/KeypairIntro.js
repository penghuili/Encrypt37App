import React from 'react';
import { Linking } from 'react-native';
import { Button, Text } from 'react-native-paper';

import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';

export default function KeypairIntro({ onNewKeypair, onExistingKeypair }) {
  return (
    <ScreenWrapper title="Generate keypair">
      <Text>
        Encrypt37 is an end-to-end encryption app, you can use it to encrypt text and file.
      </Text>
      <Button
        compact
        onPress={() => {
          const link = 'https://proton.me/blog/what-is-end-to-end-encryption';
          Linking.openURL(link);
        }}
      >
        Know more
      </Button>
      <Text>Firstly, let's generate a key pair.</Text>
      <Spacer />

      <Button mode="contained-tonal" onPress={onNewKeypair}>
        Generate key pair
      </Button>
      <Spacer />
      <Text>Already has a keypair?</Text>
      <Spacer />
      <Button mode="contained-tonal" onPress={onExistingKeypair}>
        Add existing key pair
      </Button>
    </ScreenWrapper>
  );
}
