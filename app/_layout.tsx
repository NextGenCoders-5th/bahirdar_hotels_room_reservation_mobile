import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';

import appTheme from '@/config/appTheme';
import { store } from '@/redux/store';
import { AuthProvider } from '@/hooks/useAuth';

export default function RootLayout() {
  return (
    <ThemeProvider value={appTheme}>
      <Provider store={store}>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='(auth)' />
            <Stack.Screen name='(profile)' />
          </Stack>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}
