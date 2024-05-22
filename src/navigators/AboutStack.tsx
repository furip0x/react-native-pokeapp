import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/about/AboutScreen';

const Tab = createBottomTabNavigator();

const AboutStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="AboutPage"
      screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
      <Tab.Screen name="AboutPage" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default AboutStack;
