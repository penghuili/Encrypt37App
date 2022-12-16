import React from 'react';
import { StatusBar } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';

export default function UIProvider({ children, themeMode }) {
  return (
    <PaperProvider theme={themeMode === 'light' ? MD3LightTheme : MD3DarkTheme}>
      <StatusBar barStyle={themeMode === 'light' ? 'dark-content' : 'light-content'} />
      {children}
    </PaperProvider>
  );
}
