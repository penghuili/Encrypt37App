import React from 'react';
import { ScrollView } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { navigationRef } from '../router/navigationRef';
import Spacer from './Spacer';

export default function ScreenWrapper({ hasBack, title, children }) {
  const theme = useTheme();

  return (
    <SafeAreaView edges={['left', 'right']}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{
          height: '100%',
          backgroundColor: theme.colors.background,
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}
      >
        <Appbar.Header>
          {!!hasBack && <Appbar.BackAction onPress={navigationRef.goBack} />}
          <Appbar.Content title={title} />
        </Appbar.Header>
        {children}
        <Spacer size={200} />
      </ScrollView>
    </SafeAreaView>
  );
}
