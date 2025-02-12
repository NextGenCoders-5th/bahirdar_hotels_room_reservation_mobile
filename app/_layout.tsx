import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';

import appTheme from '@/config/appTheme';
import { store } from '@/redux/store';
import { FavoriteHotelsProvider } from '@/hooks/useFavoriteHotels';
import { LocationProvider } from '@/hooks/LocationContext';
import { AuthProvider } from '@/hooks/AuthContext';

export default function RootLayout() {
  return (
    <ThemeProvider value={appTheme}>
      <Provider store={store}>
        <FavoriteHotelsProvider>
          <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name='(tabs)' />
              <Stack.Screen name='(auth)' />
              <Stack.Screen name='(profile)' />
              <Stack.Screen name='hotels' />
            </Stack>
          </AuthProvider>
        </FavoriteHotelsProvider>
      </Provider>
    </ThemeProvider>
  );
}
