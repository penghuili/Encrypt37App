import React from 'react';
import { IconButton, Text } from 'react-native-paper';

import Box from '../../components/Box';
import ScreenWrapper from '../../components/ScreenWrapper';
import { copyToClipboard } from '../../lib/clipboard';

export default function FriendPublicKey({
  route: {
    params: { label, publicKey },
  },
  onDelete,
  onToast,
}) {
  return (
    <ScreenWrapper hasBack title={label}>
      <Box direction="row">
        <IconButton
          mode="outlined"
          icon="content-copy"
          onPress={() => {
            copyToClipboard(publicKey);
            onToast('Copied!');
          }}
        />
        <IconButton
          mode="outlined"
          icon="delete"
          onPress={() => {
            onDelete(label);
          }}
        />
      </Box>
      <Text>{publicKey}</Text>
    </ScreenWrapper>
  );
}
