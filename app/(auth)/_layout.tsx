import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import appTheme from '@/config/appTheme';

export default function AuthLayout() {
  return (
    <ThemeProvider value={appTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
