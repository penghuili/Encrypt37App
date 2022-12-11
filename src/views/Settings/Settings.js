import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { Button, Text } from 'react-native-paper';

import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';

export default function Settings({ onDeleteKeypair }) {
  return (
    <ScreenWrapper title="Settings">
      <Button mode="outlined" onPress={onDeleteKeypair}>
        Delete key pair
      </Button>
      <Spacer />
      <Text>
        v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
      </Text>
    </ScreenWrapper>
  );
}
