import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import { navigationRef } from './router/navigationRef';
import Router from './router';
import store from './store';
import Toast from './components/Toast';

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer ref={navigationRef}>
          <Router />

          <Toast />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
