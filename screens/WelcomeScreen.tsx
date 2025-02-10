import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

import colors from '@/config/colors';
import AppButton from '@/components/AppButton';
import { routes } from '@/routes';
import AppText from '@/components/AppText';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.title, { fontSize: 36, marginBottom: 10 }]}>
          Welcome to Hotelify
        </Text>
        <Text style={styles.title}>Find Your Hotel Easily!</Text>
      </View>
      <Image
        style={styles.image}
        source={require('@/assets/images/welcome.png')}
      />
      <View
        style={{
          width: '100%',
          padding: 20,
          gap: 15,
        }}
      >
        <AppButton
          label='Continue'
          onPress={() => router.push(routes.GET_STARTED)}
          buttonStyle={
            {
              // backgroundColor: colors.yellow,
            }
          }
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryDark,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    backgroundColor: colors.primary,
    borderRadius: 125,
  },
  button: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.greyDark,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
