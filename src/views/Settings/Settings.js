import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
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
  onContact,
  onPrivacy,
}) {
  useFocusEffect(() => {
    onReadCacheSize();
  });

  return (
    <ScreenWrapper title="Settings">
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
          Contact: <Link onPress={onContact}>peng@duck.com</Link>
        </Text>
      </ListItem>
      <ListItem space={24}>
        <Link onPress={onPrivacy}>Privacy policy</Link>
      </ListItem>

      <ListItem space={24}>
        <Text>
          v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
        </Text>
      </ListItem>
    </ScreenWrapper>
  );
}
