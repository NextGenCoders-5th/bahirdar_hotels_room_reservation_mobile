import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import colors from '@/config/colors';
import AppButton from '@/components/AppButton';
import { routes } from '@/routes';

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: colors.primaryDark,
          textAlign: 'center',
        }}
      >
        Let us get started
      </Text>
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
            label='Sign up'
            onPress={() => router.push(routes.SIGN_UP)}
            buttonStyle={{
              backgroundColor: colors.primaryDark,
            }}
            labelStyle={{
              color: colors.white,
            }}
          />
          <AppButton
            label='Sign in'
            onPress={() => router.push(routes.SIGN_IN)}
            buttonStyle={{
              backgroundColor: colors.primaryDark,
            }}
            labelStyle={{
              color: colors.white,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // flexWrap: 'wrap',
            }}
          >
            <Text
              style={{
                color: colors.greyMediumDark,
                fontSize: 18,
                marginRight: 2,
              }}
            >
              Or
            </Text>
            <Pressable onPress={() => router.push(routes.HOME)}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: colors.primaryDark,
                  paddingHorizontal: 5,
                  fontSize: 18,
                }}
              >
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // justifyContent: 'space-between',
    gap: 15,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: colors.primary,
    borderRadius: 100,
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
