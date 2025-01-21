import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '@/config/colors';
import AppButton from '@/components/AppButton';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your home</Text>
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
          title='Continue'
          onPress={() => router.push('/get-started')}
          buttonStyle={{
            backgroundColor: colors.yellow,
          }}
          labelStyle={{
            color: colors.greyDark,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    backgroundColor: colors.white,
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
