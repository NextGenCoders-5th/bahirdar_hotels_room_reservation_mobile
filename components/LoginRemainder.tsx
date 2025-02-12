import { View, Text, Pressable } from 'react-native';
import React from 'react';
import colors from '@/config/colors';
import { router } from 'expo-router';
import { routes } from '@/routes';

export default function LoginRemainder() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        flexWrap: 'wrap',
        backgroundColor: colors.primaryMediumLight,
      }}
    >
      <Pressable onPress={() => router.push(routes.SIGN_IN)}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: colors.primaryDark,
            paddingRight: 5,
            fontSize: 18,
          }}
        >
          Log in
        </Text>
      </Pressable>
      <Text
        style={{
          color: colors.grey,
          fontSize: 18,
          marginRight: 2,
        }}
      >
        to book hotels.
      </Text>
      <Text
        style={{
          color: colors.grey,
          fontSize: 18,
          marginRight: 2,
        }}
      >
        Don't have an account?
      </Text>

      <Pressable onPress={() => router.push(routes.SIGN_UP)}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: colors.primaryDark,
            paddingLeft: 3,
            fontSize: 18,
          }}
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
}
