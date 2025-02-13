import React from 'react';
import { Stack } from 'expo-router';
import SignInScreen from '@/screens/SignInScreen';
import { useAuthContext } from '@/hooks/AuthContext';
import LoadingIndicator from '@/components/LoadingIndicator';

export default function ProfileLayout() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!user) {
    return <SignInScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='profile' />
      <Stack.Screen name='update-profile' />
      <Stack.Screen name='bookings' />
      <Stack.Screen name='profile-details' />
    </Stack>
  );
}
