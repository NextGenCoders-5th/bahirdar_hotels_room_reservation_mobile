import { View, Text, Image } from 'react-native';
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
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
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
          // marginVertical: 20,
          resizeMode: 'center',
        }}
      />
      <AppText
        style={{ color: colors.primaryDark, fontSize: 24, textAlign: 'center' }}
      >
        Forget Your Password?
      </AppText>

      <Text
        style={{
          color: colors.greyDark,
          marginBottom: 20,
          fontSize: 18,
          textAlign: 'center',
        }}
      >
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
          buttonStyle={{
            width: '60%',
            alignSelf: 'center',
            padding: 10,
          }}
          labelStyle={{
            color: colors.white,
            fontSize: 16,
            textTransform: 'capitalize',
          }}
        />
      </AppForm>
    </View>
  );
}
