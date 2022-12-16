import React from 'react';
import { StatusBar } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';

export default function UIProvider({ children, themeMode }) {
  const theme = useTheme();

  return (
    <PaperProvider theme={themeMode === 'light' ? MD3LightTheme : MD3DarkTheme}>
      <StatusBar
        backgroundColor={theme.colors.onBackground}
        barStyle={themeMode === 'light' ? 'dark-content' : 'light-content'}
        translucent={false}
      />
      {children}
    </PaperProvider>
  );
}
