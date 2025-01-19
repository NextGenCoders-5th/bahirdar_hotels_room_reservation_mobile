import { View, Text } from 'react-native';
import React from 'react';
import WelcomeScreen from '@/screens/WelcomeScreen';
import Screen from '@/components/Screen';

export default function Welcome() {
  return (
    <Screen>
      <WelcomeScreen />
    </Screen>
  );
}
