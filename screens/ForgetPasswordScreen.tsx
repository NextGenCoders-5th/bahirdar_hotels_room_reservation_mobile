import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { router } from 'expo-router';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { AppForm, FormField, SubmitButton } from '@/components/forms';
import { routes } from '@/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function ForgetPasswordScreen() {
  const handleSubmit = () => {
    router.push(routes.SUCCESS_EMAIL);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/email.jpg')}
        style={styles.image}
      />
      <AppText style={styles.title}>Forget Your Password?</AppText>

      <Text style={styles.description}>
        Please enter your email address. You will receive a link to create a new
        password via email.
      </Text>

      <AppForm
        initialValues={{ email: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField name='email' placeholder='Email' icon='email' />

        <SubmitButton
          label='Reset Password'
          buttonStyle={styles.buttonStyle}
          labelStyle={styles.labelStyle}
        />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'center',
  },
  title: {
    color: colors.primaryDark,
    fontSize: 24,
    textAlign: 'center',
  },
  description: {
    color: colors.greyDark,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonStyle: {
    width: '60%',
    alignSelf: 'center',
    padding: 10,
  },
  labelStyle: {
    color: colors.white,
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
