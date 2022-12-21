import React from 'react';
import { Button, Divider, IconButton, Text, useTheme } from 'react-native-paper';

import ActivePublicKey from '../../components/ActivePublicKey';
import Box from '../../components/Box';
import KeyItem from '../../components/KeyItem';
import ListItem from '../../components/ListItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';

export default function Keypairs({
  publicKey,
  privateKey,
  publicKeys,
  activePublicKey,
  onDeleteKeypair,
  onAddPublicKey,
  onChangeActivePublicKey,
  onFriendPublicKeyPress,
}) {
  const theme = useTheme();

  return (
    <ScreenWrapper hasBack title="Manage key pairs">
      <ActivePublicKey />

      <Text variant="headlineMedium">My key pair</Text>
      <Spacer />
      <KeyItem label="Public key" value={publicKey} />
      <Spacer />
      <KeyItem label="Private key" value={privateKey} />
      <Spacer />
      <Box direction="row" justify="space-between">
        <Button
          mode="contained"
          icon="check"
          disabled={!activePublicKey}
          onPress={() => onChangeActivePublicKey(null)}
        >
          Activate
        </Button>

        <Button
          mode="contained"
          icon="delete"
          buttonColor={theme.colors.error}
          onPress={onDeleteKeypair}
        >
          Delete
        </Button>
      </Box>

      <Spacer size={32} />
      <Divider />
      <Spacer size={32} />

      <Text variant="headlineMedium">My friends' public keys</Text>
      <Spacer />
      <Box>
        <Button mode="outlined" icon="plus" onPress={onAddPublicKey}>
          Add public key
        </Button>
      </Box>
      {publicKeys.map(item => (
        <ListItem
          key={item.label}
          onPress={() => onFriendPublicKeyPress(item.label, item.publicKey)}
          left={
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
        >
          {item.label}
        </ListItem>
      ))}
      {!publicKeys.length && (
        <>
          <Spacer />
          <Text>
            Add your friends' public key here, so you can encrypt content and share with them.
          </Text>
        </>
      )}
    </ScreenWrapper>
  );
}
