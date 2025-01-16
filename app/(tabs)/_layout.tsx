import { Tabs } from 'expo-router';
import colors from '@/config/colors';
import TabBarIcon from '@/components/TabBarIcon';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primaryDark,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 60,
          marginVertical: 5,
        },

        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 14,
          fontWeight: 'bold',
          // color: colors.grey,
        },
        tabBarLabelPosition: 'below-icon',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',

          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='home' focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name='favorites'
        options={{
          title: 'Favorites',

          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='heart' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='bookings'
        options={{
          title: 'Bookings',

          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='calendar' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',

          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='person' focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
