import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import Toast from './components/Toast';
import UIProvider from './components/UIProvider';
import Router from './router';
import { navigationRef } from './router/navigationRef';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <UIProvider>
        <NavigationContainer ref={navigationRef}>
          <Router />

          <Toast />
        </NavigationContainer>
      </UIProvider>
    </StoreProvider>
  );
}

export default App;
