import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppButton from '@/components/AppButton';
import { routes } from '@/routes';

export default function SuccessEmailScreen() {
  const { email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/success-email.gif')}
        style={styles.gifImage}
      />
      <AppText style={styles.description}>
        Check your email, we've sent a reset link to {email}.
      </AppText>

      <AppButton
        label='Back to Sign In'
        onPress={() => {
          router.push(routes.SIGN_IN);
        }}
        buttonStyle={styles.buttonStyle}
        labelStyle={styles.labelStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 20,
  },
  gifImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'center',
    backgroundColor: colors.primary,
  },
  description: {
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonStyle: {
    width: 'auto',
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primaryDark,
    backgroundColor: colors.white,
  },
  labelStyle: {
    fontSize: 16,
    color: colors.primaryDark,
  },
});
