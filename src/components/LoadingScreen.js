import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import Box from './Box';
import ScreenWrapper from './ScreenWrapper';

export default function LoadingScreen() {
  return (
    <ScreenWrapper title="Encrypt37">
      <Box h="300" justify="center" align="center">
        <ActivityIndicator animating />
      </Box>
    </ScreenWrapper>
  );
}
