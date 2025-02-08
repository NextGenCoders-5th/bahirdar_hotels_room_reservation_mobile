import { Tabs } from 'expo-router';
import colors from '@/config/colors';
import TabBarIcon from '@/components/TabBarIcon';
import { ThemeProvider } from '@react-navigation/native';
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
            // marginTop: 5,
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
              <TabBarIcon
                name={focused ? 'home-sharp' : 'home-outline'}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='favorites'
          options={{
            title: 'Favorites',

            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                name={focused ? 'heart' : 'heart-outline'}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='search'
          options={{
            title: 'Search',

            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                // name={focused ? 'calendar-clear' : 'calendar-clear-outline'}
                name={focused ? 'search' : 'search-outline'}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
