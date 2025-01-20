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
        backgroundColor: colors.white,
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
        }}
      />
      <AppText style={{ color: colors.greyDark, marginVertical: 20 }}>
        An email has been sent successfully to tew*****ie@gmail.com. Please
        click the link to reset your password.
      </AppText>

      <AppButton
        title='Go Back'
        onPress={() => {
          router.push('/signin');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
