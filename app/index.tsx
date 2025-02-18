import React from 'react';

import WelcomeScreen from '@/screens/WelcomeScreen';
import Screen from '@/components/Screen';
import { useAuthContext } from '@/contexts/AuthContext';
import HomeScreen from '@/screens/HomeScreen';

export default function Welcome() {
  const { user } = useAuthContext();
  if (user) {
    return (
      <Screen>
        <HomeScreen />
      </Screen>
    );
  }
  return (
    <Screen>
      <WelcomeScreen />
    </Screen>
  );
}
