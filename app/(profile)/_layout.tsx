import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useAuth } from '@/hooks/authContext';
import SignInScreen from '@/screens/SignInScreen';
import { useGetCurrentUserQuery } from '@/redux/userApi';

export default function ProfileLayout() {
  // const { user, loading } = useAuth();
  const { data, isLoading, error } = useGetCurrentUserQuery();
  const user = data?.data;

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
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
