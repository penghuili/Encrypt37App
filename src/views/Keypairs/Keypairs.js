import React from 'react';
import { Button, Divider, IconButton, List, Text, useTheme } from 'react-native-paper';

import Box from '../../components/Box';
import KeyItem from '../../components/KeyItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';

export default function Keypairs({
  publicKey,
  privateKey,
  publicKeys,
  activePublicKey,
  onDeleteKeypair,
  onAddPublicKey,
  onDeletePublicKey,
  onChangeActivePublicKey,
}) {
  const theme = useTheme();

  return (
    <ScreenWrapper hasBack title="Manage key pairs">
      <Text variant="headlineMedium">Active public key</Text>
      <Text style={{ color: theme.colors.primary }} variant="bodyLarge">
        {activePublicKey ? activePublicKey : 'My own public key'}
      </Text>

      <Spacer />
      <Divider />
      <Spacer />

      <Text variant="headlineMedium">My key pair</Text>
      <Spacer />
      <KeyItem label="Public key" value={publicKey} />
      <Spacer />
      <KeyItem label="Private key" value={privateKey} />
      <Spacer />
      <Box>
        <Button
          mode="contained"
          icon="delete"
          buttonColor={theme.colors.error}
          onPress={onDeleteKeypair}
        >
          Delete key pair
        </Button>
      </Box>

      <Spacer />
      <Divider />
      <Spacer />

      <Text variant="headlineMedium">My friends' public keys</Text>
      <Spacer />
      <Box>
        <Button mode="outlined" icon="plus" onPress={onAddPublicKey}>
          Add friend's public key
        </Button>
      </Box>
      {publicKeys.map(item => (
        <List.Item
          key={item.label}
          title={item.label}
          left={() =>
            activePublicKey === item.label ? (
              <IconButton
                icon="checkbox-marked-circle"
                iconColor={theme.colors.primary}
                onPress={() => onChangeActivePublicKey(null)}
              />
            ) : (
              <IconButton
                icon="checkbox-blank-circle-outline"
                onPress={() => onChangeActivePublicKey(item.label)}
              />
            )
          }
          right={() => <IconButton icon="delete" onPress={() => onDeletePublicKey(item.label)} />}
        />
      ))}
    </ScreenWrapper>
  );
}
