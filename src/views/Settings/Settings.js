import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text } from 'react-native-paper';

import Box from '../../components/Box';
import Link from '../../components/Link';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';

export default function Settings({ cacheSize, onManageKeypairs, onReadCacheSize, onClearCache }) {
  useFocusEffect(() => {
    onReadCacheSize();
  });

  return (
    <ScreenWrapper title="Settings">
      <Box>
        <Link onPress={onManageKeypairs}>Manage key pairs</Link>
        <Spacer />
        <Box direction="row" align="center">
          <Text style={{ marginRight: 4 }}>Cache: {cacheSize}</Text>
          <Link onPress={onClearCache}>Clear</Link>
        </Box>
        <Spacer />
        <Text>
          v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
        </Text>
      </Box>
    </ScreenWrapper>
  );
}
