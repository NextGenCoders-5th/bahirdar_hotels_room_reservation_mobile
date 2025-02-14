import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';

import appTheme from '@/config/appTheme';
import { store } from '@/redux/store';
import { FavoriteHotelsContextProvider } from '@/contexts/FavoriteHotelsContext';
import { AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout() {
  return (
    <ThemeProvider value={appTheme}>
      <Provider store={store}>
        <FavoriteHotelsContextProvider>
          <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name='(tabs)' />
              <Stack.Screen name='(auth)' />
              <Stack.Screen name='(profile)' />
              <Stack.Screen name='hotels' />
            </Stack>
          </AuthProvider>
        </FavoriteHotelsContextProvider>
      </Provider>
    </ThemeProvider>
  );
}
