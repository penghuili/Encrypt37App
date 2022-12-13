import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ExistingKeypair from '../views/ExistingKeypair';
import FullKey from '../views/FullKey';
import GenerateKeypair from '../views/GenerateKeypair';
import KeypairIntro from '../views/KeypairIntro';
import { routeNames } from './routes';

const NavStack = createNativeStackNavigator();

function SetupKeypair() {
  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      <NavStack.Screen name={routeNames.keypairIntro} component={KeypairIntro} />
      <NavStack.Screen name={routeNames.newKeypair} component={GenerateKeypair} />
      <NavStack.Screen name={routeNames.existingKeypair} component={ExistingKeypair} />
      <NavStack.Screen name={routeNames.fullKey} component={FullKey} />
    </NavStack.Navigator>
  );
}

export default SetupKeypair;
