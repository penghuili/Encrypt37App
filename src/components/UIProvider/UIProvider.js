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
  const isLight = themeMode === 'light';
  return (
    <PaperProvider theme={isLight ? MD3LightTheme : MD3DarkTheme}>
      <StatusBar
        backgroundColor={isLight ? theme.colors.background : theme.colors.onBackground}
        barStyle={isLight ? 'dark-content' : 'light-content'}
      />
      {children}
    </PaperProvider>
  );
}
