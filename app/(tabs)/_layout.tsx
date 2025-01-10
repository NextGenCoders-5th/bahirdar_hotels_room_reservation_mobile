import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='bookings'
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
