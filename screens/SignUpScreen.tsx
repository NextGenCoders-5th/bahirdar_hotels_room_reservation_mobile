import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import * as Yup from 'yup';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import ImageButton from '@/components/ImageButton';
import {
  AppForm,
  FormField,
  CheckBoxField,
  SubmitButton,
  ErrorMessage,
} from '@/components/forms';
import { routes } from '@/routes';
import { useSignupMutation } from '@/redux/api/authApi';
import { ErrorResponse } from '@/types/general';
import LoadingIndicator from '@/components/LoadingIndicator';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).max(255).label('Username'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
  passwordConfirm: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .label('Password confirm'),
  acceptTerms: Yup.boolean()
    .required()
    .oneOf([true], 'You must accept the terms and conditions'),
});

const signupInitialValues = {
  username: 'user',
  email: 'user@test.com',
  password: 'password',
  passwordConfirm: 'password',
  acceptTerms: true,
};

export default function SignUpScreen() {
  const router = useRouter();
  const [error, setError] = useState<ErrorResponse | null>(null);

  const [signup, { isLoading, error: signUpError }] = useSignupMutation();

  // console.log('signUpError', signUpError);

  const handleSubmit = async (values: {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
    acceptTerms: boolean;
  }) => {
    const { username, email, password, passwordConfirm } = values;
    try {
      await signup({
        username,
        email,
        password,
        passwordConfirm,
      }).unwrap();
      router.push(routes.SIGN_IN);
    } catch (err: any) {
      console.log('catched signup error', err);
      setError(err);
    }
  };

  if (isLoading) {
    return <LoadingIndicator message='Creating account...' />;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.primaryDark,
      }}
    >
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          resizeMode: 'cover',
          alignSelf: 'center',
          marginVertical: 20,
        }}
        source={require('@/assets/images/get-started.png')}
      />
      <AppText
        style={{
          color: colors.white,
          textAlign: 'center',
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Create New Account
      </AppText>
      <View
        style={{
          backgroundColor: colors.white,
          flex: 1,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          padding: 20,
          // marginBottom: 20,
        }}
      >
        <AppForm
          initialValues={signupInitialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={{ marginBottom: 10 }}>
            <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
              User Name
            </AppText>
            <FormField
              autoCapitalize='none'
              autoCorrect={false}
              name='username'
              placeholder='User name'
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
              Email
            </AppText>
            <FormField
              autoCapitalize='none'
              keyboardType='email-address'
              autoCorrect={false}
              name='email'
              placeholder='Email'
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
              Password
            </AppText>
            <FormField
              autoCapitalize='none'
              secureTextEntry
              autoCorrect={false}
              name='password'
              placeholder='Password'
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
              Password Confirm
            </AppText>
            <FormField
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              name='passwordConfirm'
              placeholder='Password confirm'
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <CheckBoxField
              name='acceptTerms'
              description='I agree to the terms and conditions'
            />
          </View>

          {error && error.data && error.data.errors && (
            <ErrorMessage
              error={error.data.errors[0]}
              visible={error.data.errors.length > 0}
            />
          )}

          {error && error.data && error.status === 500 && (
            <ErrorMessage
              error='User with this email already exists'
              visible={true}
            />
          )}
          {error && error.data && error.status === 400 && (
            <ErrorMessage error={error.data.message} visible={true} />
          )}
          <SubmitButton label='Sign Up' />
        </AppForm>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: colors.greyMediumDark,
            marginVertical: 10,
          }}
        >
          Or continue with
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            marginBottom: 20,
            justifyContent: 'center',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <ImageButton
            imageUrl={require('@/assets/images/google.jpeg')}
            onPress={() => {}}
          />
          <ImageButton
            imageUrl={require('@/assets/images/facebook.jpg')}
            onPress={() => {}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: colors.greyMediumDark,
              fontSize: 14,
              marginRight: 2,
            }}
          >
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push(routes.SIGN_IN)}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.primaryDark,
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
