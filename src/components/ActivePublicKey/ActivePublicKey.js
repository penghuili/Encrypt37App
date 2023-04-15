import React from 'react';
import { Divider, Text, useTheme } from 'react-native-paper';

import Box from '../Box';
import Link from '../Link';
import Spacer from '../Spacer';
import { routeNames } from '../../router/routes';

function ActivePublicKey({ activePublicKey, onNavigate }) {
  const theme = useTheme();

  return (
    <>
      <Box direction="row" align="center" pb={4}>
        <Text variant="bodyLarge" style={{ marginRight: 4 }}>
          Encrypting for: <Text style={{ color: theme.colors.primary }}>{activePublicKey}</Text>.
        </Text>
        <Link onPress={() => onNavigate(routeNames.keypairs)}>Change</Link>
      </Box>
      <Divider />
      <Spacer />
    </>
  );
}

export default ActivePublicKey;
