import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import colors from '@/config/colors';
import Screen from '@/components/Screen';
import AppButton from '@/components/AppButton';

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started</Text>
      <Image
        style={styles.image}
        source={require('@/assets/images/get-started.png')}
      />
      <View
        style={{
          width: '100%',
          gap: 5,
        }}
      >
        <View style={{ padding: 20 }}>
          <AppButton
            title='Sign up'
            onPress={() => router.push('/signup')}
            buttonStyle={{
              backgroundColor: colors.yellow,
            }}
            labelStyle={{
              color: colors.greyDark,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
          <Text style={{ color: colors.white, fontSize: 14, marginRight: 2 }}>
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push('/signin')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.yellow,
                fontSize: 14,
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
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
