import React from 'react';
import { Stack } from 'expo-router';

export default function HotelLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='[hotel_id]' />
      {/* <Stack.Screen name='[hotel_id]/rooms/[room_id]' />
      <Stack.Screen name='[hotel_id]/rooms/[room_id]/book' /> */}
    </Stack>
  );
}
