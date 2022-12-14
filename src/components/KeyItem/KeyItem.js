import React from 'react';
import { Text } from 'react-native-paper';

function KeyItem({ label, value, onPress }) {
  return (
    <>
      <Text variant="bodyLarge">{label}</Text>
      <Text variant="bodySmall" numberOfLines={3} onPress={() => onPress(label, value)}>
        {value}
      </Text>
    </>
  );
}

export default KeyItem;
