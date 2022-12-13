import React from 'react';
import { Text } from 'react-native-paper';

function Link({ children, onPress }) {
  return (
    <Text style={{ textDecorationLine: 'underline' }} onPress={onPress}>
      {children}
    </Text>
  );
}

export default Link;
