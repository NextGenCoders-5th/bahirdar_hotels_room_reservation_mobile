import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/src/screens/HomeScreen';
import SearchScreen from '@/src/screens/SearchScreen';
// import BookingsScreen from '../screens/BookingsScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      {/* <Tab.Screen name='Bookings' component={BookingsScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
