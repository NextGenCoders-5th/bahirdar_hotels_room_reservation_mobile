import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

import colors from '@/config/colors';
import AppButton from '@/components/AppButton';
import { routes } from '@/routes';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={[styles.title, styles.welcomeText]}>Welcome,</Text>
        <Text style={styles.title}>Find Your Stay Easily!</Text>
      </View>
      <Image
        style={styles.image}
        source={require('@/assets/images/welcome.png')}
      />
      <View style={styles.buttonContainer}>
        <AppButton
          label='Continue'
          onPress={() => router.push(routes.GET_STARTED)}
          labelStyle={{
            color: colors.white,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    gap: 50,
  },
  welcomeContainer: {
    width: '100%',
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 36,
    marginBottom: 10,
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryDark,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
    gap: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: colors.primary,
    borderRadius: 125,
  },
});
