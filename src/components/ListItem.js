import React from 'react';
import { Text, TouchableRipple } from 'react-native-paper';

import Box from './Box';

function ListItem({ children, left, right, space = 8, onPress }) {
  return (
    <Box direction="row" align="center" justify="space-between" mb={space}>
      <Box direction="row" align="center" justify="space-between" pr={8}>
        {left}
        <TouchableRipple onPress={onPress}>
          <>{typeof children === 'string' ? <Text>{children}</Text> : children}</>
        </TouchableRipple>
      </Box>
      {right}
    </Box>
  );
}

export default ListItem;
