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

export default function Settings({
  cacheSize,
  onManageKeypairs,
  onChangeTheme,
  onReadCacheSize,
  onClearCache,
}) {
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

      <ListItem space={24} onPress={onManageKeypairs}>
        Manage key pairs
      </ListItem>
      <ListItem space={24} onPress={onChangeTheme}>
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
    </ScreenWrapper>
  );
}
