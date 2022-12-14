import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoadingScreen from '../components/LoadingScreen';
import AddPublicKey from '../views/AddPublicKey';
import FriendPublicKey from '../views/FriendPublicKey';
import FullKey from '../views/FullKey';
import Keypairs from '../views/Keypairs';
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
        <NavStack.Screen name={routeNames.keypairs} component={Keypairs} />
        <NavStack.Screen name={routeNames.fullKey} component={FullKey} />
        <NavStack.Screen name={routeNames.addPublicKey} component={AddPublicKey} />
        <NavStack.Screen name={routeNames.friendPublicKey} component={FriendPublicKey} />
      </NavStack.Group>
    </NavStack.Navigator>
  );
}

export default Router;
