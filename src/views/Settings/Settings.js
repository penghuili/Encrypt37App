import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { Button, Text } from 'react-native-paper';

import Box from '../../components/Box';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';

export default function Settings({ cacheSize, onReadCacheSize, onClearCache, onDeleteKeypair }) {
  useFocusEffect(() => {
    onReadCacheSize();
  });

  return (
    <ScreenWrapper title="Settings">
      <Button mode="outlined" onPress={onDeleteKeypair}>
        Delete key pair
      </Button>
      <Spacer />
      <Box direction="row" align="center">
        <Text>Cache: {cacheSize}</Text>
        <Button onPress={onClearCache}>Clear</Button>
      </Box>
      <Text>
        v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
      </Text>
    </ScreenWrapper>
  );
}
