import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text } from 'react-native-paper';

import Box from '../../components/Box';
import Link from '../../components/Link';
import ListItem from '../../components/ListItem';
import ScreenWrapper from '../../components/ScreenWrapper';

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
      <Box>
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
        <ListItem space={24}>
          <Text>
            v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
          </Text>
        </ListItem>
      </Box>
    </ScreenWrapper>
  );
}
