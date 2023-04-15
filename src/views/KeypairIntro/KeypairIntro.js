import React from 'react';
import { Linking } from 'react-native';
import { Button, Text } from 'react-native-paper';

import Link from '../../components/Link';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { routeNames } from '../../router/routes';

export default function KeypairIntro({ onNavigate }) {
  return (
    <ScreenWrapper title="Generate keypair">
      <Text>
        Encrypt37 is an end-to-end encryption app, you can use it to encrypt text and file.{' '}
        <Link
          onPress={() => {
            const link = 'https://proton.me/blog/what-is-end-to-end-encryption';
            Linking.openURL(link);
          }}
        >
          Know more
        </Link>
      </Text>

      <Spacer />
      <Text>Firstly, let's generate a key pair.</Text>
      <Spacer />

      <Button mode="contained-tonal" onPress={() => onNavigate(routeNames.newKeypair)}>
        Generate key pair
      </Button>
      <Spacer />
      <Text>Already has a keypair?</Text>
      <Spacer />
      <Button mode="contained-tonal" onPress={() => onNavigate(routeNames.existingKeypair)}>
        Add existing key pair
      </Button>
    </ScreenWrapper>
  );
}
