import React from 'react';
import { Text } from 'react-native-paper';

import { routeNames } from '../../router/routes';

function KeyItem({ label, value, onNavigate }) {
  return (
    <>
      <Text variant="bodyLarge">{label}</Text>
      <Text
        variant="bodySmall"
        numberOfLines={1}
        onPress={() => onNavigate(routeNames.fullKey, { label, value })}
      >
        {value}
      </Text>
    </>
  );
}

export default KeyItem;
