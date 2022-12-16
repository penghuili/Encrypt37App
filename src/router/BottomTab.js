import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { bottomTabbarHeight } from '../lib/constants';
import EncryptFile from '../views/EncryptFile';
import EncryptText from '../views/EncryptText';
import Settings from '../views/Settings';
import { routeNames } from './routes';

const Tab = createBottomTabNavigator();

function BottomTab() {
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();

  function getIconName(routeName, focused) {
    if (routeName === routeNames.text) {
      return focused ? 'message-text-lock' : 'message-text-lock-outline';
    } else if (routeName === routeNames.file) {
      return focused ? 'file-lock' : 'file-lock-outline';
    } else if (routeName === routeNames.settings) {
      return focused ? 'cog' : 'cog-outline';
    } else {
      return null;
    }
  }

  function getIcon(focused, color, routeName) {
    return <IconButton icon={getIconName(routeName, focused)} iconColor={color} />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => getIcon(focused, color, route.name),
        tabBarLabel: () => null,
        tabBarActiveTintColor: theme.colors.error,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingBottom: bottom,
          height: bottomTabbarHeight + bottom,
          backgroundColor: theme.colors.background,
        },
      })}
    >
      <Tab.Screen name={routeNames.text} component={EncryptText} />
      <Tab.Screen name={routeNames.file} component={EncryptFile} />
      <Tab.Screen name={routeNames.settings} component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTab;
