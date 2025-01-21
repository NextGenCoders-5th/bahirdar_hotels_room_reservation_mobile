import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppButton from '@/components/AppButton';
import { router } from 'expo-router';

export default function SuccessEmailScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryDark,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <Image
        source={require('@/assets/success-email.gif')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          resizeMode: 'center',
          backgroundColor: colors.white,
        }}
      />
      <AppText
        style={{
          color: colors.white,
          textAlign: 'center',
          marginVertical: 20,
        }}
      >
        An email has been sent successfully to tew*****ie@gmail.com. Please
        click the link to reset your password.
      </AppText>

      <AppButton
        label='Back to Sign In'
        onPress={() => {
          router.push('/signin');
        }}
        buttonStyle={{
          width: 'auto',
          padding: 12,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: colors.primaryDark,
          backgroundColor: colors.white,
        }}
        labelStyle={{
          fontSize: 16,
          color: colors.primaryDark,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
