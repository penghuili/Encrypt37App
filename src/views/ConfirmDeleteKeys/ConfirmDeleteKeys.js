import React from 'react';
import { Button, Text, useTheme } from 'react-native-paper';

import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';

export default function ConfirmDeleteKeys({ onDelete }) {
  const theme = useTheme();

  return (
    <ScreenWrapper hasBack title="Are you sure?">
      <Text>
        Your key pair and all your friends' public keys will be deleted. Still want to delete?
      </Text>
      <Spacer />
      <Button mode="contained" buttonColor={theme.colors.error} onPress={onDelete}>
        Yes, delete all keys
      </Button>
    </ScreenWrapper>
  );
}
