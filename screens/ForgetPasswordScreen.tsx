import { View, Text, Image } from 'react-native';
import React from 'react';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppTextInput from '@/components/AppTextInput';
import AppButton from '@/components/AppButton';
import { router } from 'expo-router';

export default function ForgetPasswordScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryDark,
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Image
        source={require('@/assets/images/email.jpg')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          marginVertical: 20,
          resizeMode: 'center',
        }}
      />
      <AppText
        style={{ color: colors.white, fontSize: 24, textAlign: 'center' }}
      >
        Forget Your Password?
      </AppText>

      <Text
        style={{
          color: colors.white,
          marginBottom: 20,
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        Please enter your email address. You will receive a link to create a new
        password via email.
      </Text>
      <AppTextInput placeholder='Email' icon='email' />
      <AppButton
        label='Reset Password'
        onPress={() => {
          router.push('/success-email');
        }}
        buttonStyle={{
          backgroundColor: colors.yellow,
          width: '60%',
          alignSelf: 'center',
          padding: 10,
        }}
        labelStyle={{
          color: colors.greyMediumDark,
          fontSize: 16,
          textTransform: 'capitalize',
        }}
      />
    </View>
  );
}
