import { Tabs } from 'expo-router';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@react-navigation/native';

import colors from '@/config/colors';
import appTheme from '@/config/appTheme';

export default function TabsLayout() {
  return (
    <ThemeProvider value={appTheme}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primaryDark,
          tabBarInactiveTintColor: colors.grey,
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarLabelPosition: 'below-icon',
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={26}
                color={focused ? colors.primaryDark : colors.grey}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='hotels'
          options={{
            title: 'Hotels',
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name={focused ? 'hotel' : 'hotel'}
                size={22}
                color={focused ? colors.primaryDark : colors.grey}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='favorites'
          options={{
            title: 'Favorites',

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={26}
                color={focused ? colors.primaryDark : colors.grey}
              />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
