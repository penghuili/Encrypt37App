import React from 'react';
import { Divider, Text, useTheme } from 'react-native-paper';

import Box from '../Box';
import Link from '../Link';
import Spacer from '../Spacer';

function ActivePublicKey({ activePublicKey, onChange }) {
  const theme = useTheme();

  return (
    <>
      <Box direction="row" align="center" pb={4}>
        <Text variant="bodyLarge" style={{ marginRight: 4 }}>
          Encrypting for: <Text style={{ color: theme.colors.primary }}>{activePublicKey}</Text>.
        </Text>
        <Link onPress={onChange}>Change</Link>
      </Box>
      <Divider />
      <Spacer />
    </>
  );
}

export default ActivePublicKey;
