import React, { useEffect } from 'react';

import WelcomeScreen from '@/screens/WelcomeScreen';
import Screen from '@/components/Screen';
import { useAuthContext } from '@/contexts/AuthContext';
import { router } from 'expo-router';

export default function Welcome() {
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.replace('/(tabs)/home');
    }
  }, [user]);

  return (
    <Screen>
      <WelcomeScreen />
    </Screen>
  );
}
