import React from 'react';
import { Button } from 'react-native-paper';

import ScreenWrapper from '../../components/ScreenWrapper';

export default function Settings({ onDeleteKeypair }) {
  return (
    <ScreenWrapper title="Settings">
      <Button mode="outlined" onPress={onDeleteKeypair}>
        Delete key pair
      </Button>
    </ScreenWrapper>
  );
}
