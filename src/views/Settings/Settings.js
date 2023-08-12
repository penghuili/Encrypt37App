import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Linking } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Divider, Text } from 'react-native-paper';

import Box from '../../components/Box';
import Link from '../../components/Link';
import ListItem from '../../components/ListItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { routeNames } from '../../router/routes';

export default function Settings({ cacheSize, onReadCacheSize, onClearCache, onNavigate }) {
  useFocusEffect(() => {
    onReadCacheSize();
  });

  return (
    <ScreenWrapper title="Settings">
      <Text variant="headlineSmall">Encrypt37: Encrypt and share</Text>
      <Text>End-to-end encrypt text and files, and get raw result.</Text>
      <Spacer />
      <Text variant="bodyLarge">Open source, no tracking, free forever.</Text>

      <Spacer size={24} />
      <Divider />
      <Spacer size={24} />

      <ListItem space={24} onPress={() => onNavigate(routeNames.keypairs)}>
        Manage key pairs
      </ListItem>
      <ListItem space={24} onPress={() => onNavigate(routeNames.keypairGenerator)}>
        Key pair generator
      </ListItem>
      <ListItem space={24} onPress={() => onNavigate(routeNames.changeTheme)}>
        Chagne theme
      </ListItem>
      <ListItem space={24}>
        <Box direction="row" align="center">
          <Text style={{ marginRight: 4 }}>Cache: {cacheSize}</Text>
          <Link onPress={onClearCache}>Clear</Link>
        </Box>
      </ListItem>

      <Divider />
      <Spacer size={24} />

      <ListItem space={24}>
        <Text>
          Contact:{' '}
          <Link
            onPress={() => {
              Linking.openURL('mailto:peng37@proton.me');
            }}
          >
            peng37@proton.me
          </Link>
        </Text>
      </ListItem>
      <ListItem space={24}>
        <Link
          onPress={() => {
            Linking.openURL('https://github.com/penghuili/Encrypt37');
          }}
        >
          Source code
        </Link>
      </ListItem>
      <ListItem space={24}>
        <Link
          onPress={() => {
            Linking.openURL('https://github.com/penghuili/Encrypt37/blob/master/PRIVACYPOLICY.md');
          }}
        >
          Privacy policy
        </Link>
      </ListItem>

      <ListItem space={24}>
        <Text>
          v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
        </Text>
      </ListItem>

      <Divider />
      <Spacer size={24} />

      <ListItem space={12}>
        <Text variant="bodyLarge">Something else from me:</Text>
      </ListItem>
      <ListItem space={12}>
        <Link
          onPress={() => {
            Linking.openURL('https://note.peng37.com/');
          }}
        >
          Note37: Rich text notes. Encrypted.
        </Link>
      </ListItem>
      <ListItem space={12}>
        <Link
          onPress={() => {
            Linking.openURL('https://peng37.com/link37/');
          }}
        >
          Link37: Your browser's start page. Encrypted.
        </Link>
      </ListItem>
      <ListItem space={12}>
        <Link
          onPress={() => {
            Linking.openURL('https://watcher.peng37.com/');
          }}
        >
          Watcher37: Get notified when web pages change. Encrypted.
        </Link>
      </ListItem>
    </ScreenWrapper>
  );
}
