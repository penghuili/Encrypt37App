import React from 'react';
import { IconButton, Text } from 'react-native-paper';

import ScreenWrapper from '../../components/ScreenWrapper';
import { copyToClipboard } from '../../lib/clipboard';

export default function Key({
  route: {
    params: { label, value },
  },
  onToast,
}) {
  return (
    <ScreenWrapper hasBack title={label}>
      <IconButton
        mode="outlined"
        icon="content-copy"
        onPress={() => {
          copyToClipboard(value);
          onToast('Copied!');
        }}
      />
      <Text>{value}</Text>
    </ScreenWrapper>
  );
}
