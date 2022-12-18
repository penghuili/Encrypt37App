import React from 'react';
import { Snackbar } from 'react-native-paper';

export default function Toast({ message, onClose }) {
  return (
    <Snackbar
      visible={!!message}
      duration={8000}
      action={{ label: 'Close', onPress: onClose }}
      onDismiss={onClose}
    >
      {message}
    </Snackbar>
  );
}
