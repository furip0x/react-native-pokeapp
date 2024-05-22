import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const SettingsStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="SettingsStack"
      screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
      <Tab.Screen name="SettingsStack" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default SettingsStack;
