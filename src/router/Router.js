import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoadingScreen from '../components/LoadingScreen';
import EncryptFile from '../views/EncryptFile';
import BottomTab from './BottomTab';
import { routeNames } from './routes';
import SetupKeypair from './SetupKeypair';

const NavStack = createNativeStackNavigator();

function Router({ isPending, hasKeypair }) {
  if (isPending) {
    return <LoadingScreen />;
  }

  if (!hasKeypair) {
    return <SetupKeypair />;
  }

  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      <NavStack.Screen name="BottomTab" component={BottomTab} />

      <NavStack.Group screenOptions={{ headerShown: false }}>
        <NavStack.Screen name={routeNames.file} component={EncryptFile} />
      </NavStack.Group>
    </NavStack.Navigator>
  );
}

export default Router;
