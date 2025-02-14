import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import {
  AppForm,
  ErrorMessage,
  FormField,
  SubmitButton,
} from '@/components/forms';
import { routes } from '@/routes';
import { useLoginMutation } from '@/redux/api/authApi';
import { ErrorResponse } from '@/types/general';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useAuthContext } from '@/contexts/AuthContext';
import ImageButton from '@/components/ImageButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
});

const signupInitialValues = {
  email: 'user@test.com',
  password: 'password',
};

export default function SignInScreen() {
  const router = useRouter();
  const [error, setError] = useState<ErrorResponse | null>(null);

  const { login, loading } = useAuthContext();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await login(values);
      router.push(routes.HOME);
    } catch (error: any) {
      setError(error);
      console.log('catched login error', error);
    }
  };

  if (loading) {
    return <LoadingIndicator message='Loading signing in...' />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/images/get-started.png')}
      />
      <AppText style={styles.signInText}>Sign In</AppText>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={signupInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <View style={{ marginBottom: 10 }}>
            <AppText style={styles.fieldTitle}>Email address</AppText>
            <FormField
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              name='email'
              placeholder='Email'
              icon='email'
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <AppText style={styles.fieldTitle}>Password</AppText>

            <FormField
              secureTextEntry
              autoCorrect={false}
              name='password'
              placeholder='Password'
              icon='lock'
            />
          </View>
          <Pressable onPress={() => router.push(routes.FORGOT_PASSWORD)}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </Pressable>
          {error && error.data && (
            <ErrorMessage error={error.data.message} visible={true} />
          )}
          <SubmitButton label='Sign in' />
        </AppForm>
        <Text style={styles.continueWithText}>Or continue with</Text>
        <View style={styles.imageButtonsContainer}>
          <ImageButton
            imageUrl={require('@/assets/images/google.jpeg')}
            onPress={() => {}}
          />
          <ImageButton
            imageUrl={require('@/assets/images/facebook.jpg')}
            onPress={() => {}}
          />
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push(routes.SIGN_UP)}>
            <Text style={styles.signUpText}>Sign up</Text>
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
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: 10,
  },
  signInText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
    paddingTop: 40,
  },
  fieldTitle: {
    marginBottom: 0,
    fontWeight: '600',
  },
  continueWithText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.greyMediumDark,
    marginVertical: 10,
  },
  imageButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  noAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noAccountText: {
    color: colors.greyMediumDark,
    fontSize: 14,
    marginRight: 2,
  },
  signUpText: {
    textDecorationLine: 'underline',
    color: colors.primaryDark,
  },
  forgotPasswordText: {
    marginBottom: 10,
    color: colors.primary,
    fontWeight: '500',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});
