import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import ImageButton from '@/components/ImageButton';
import {
  AppForm,
  ErrorMessage,
  FormField,
  SubmitButton,
} from '@/components/forms';
import { routes } from '@/routes';
import { useLoginMutation } from '@/redux/authApi';
import { useAuth } from '@/hooks/useAuth';
import { ErrorResponse } from '@/types/general';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
});

const signupInitialValues = {
  email: '',
  password: '',
};

export default function SignInScreen() {
  const router = useRouter();
  const [error, setError] = React.useState<ErrorResponse | null>(null);

  // const [_, { isLoading, error: loginError }] = useLoginMutation();
  // console.log('loginError', loginError);

  const { login, loading } = useAuth();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await login(values);
      console.log(response);
      router.push(routes.HOME);
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          resizeMode: 'cover',
          alignSelf: 'center',
          marginVertical: 10,
        }}
        source={require('@/assets/images/get-started.png')}
      />
      <AppText
        style={{
          color: colors.white,
          textAlign: 'center',
          fontSize: 24,
          marginBottom: 10,
        }}
      >
        Sign In
      </AppText>
      <View
        style={{
          backgroundColor: colors.white,
          flex: 1,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          padding: 20,
          paddingTop: 40,
        }}
      >
        <AppForm
          initialValues={signupInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <View style={{ marginBottom: 10 }}>
            <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
              Email address
            </AppText>
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
            <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
              Password
            </AppText>

            <FormField
              secureTextEntry
              autoCorrect={false}
              name='password'
              placeholder='Password'
              icon='lock'
            />
          </View>
          <Pressable onPress={() => router.push(routes.FORGOT_PASSWORD)}>
            <Text style={styles.text}>Forgot password?</Text>
          </Pressable>
          {error &&
            (typeof error.message === 'string' ? (
              <ErrorMessage
                error={error.message}
                visible={error.message !== null}
              />
            ) : (
              <ErrorMessage
                error={error.message.message}
                visible={error.message.message !== null}
              />
            ))}
          <SubmitButton label='Sign in' />
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
            Don't have an account?
          </Text>
          <Pressable onPress={() => router.push(routes.SIGN_UP)}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.primaryDark,
              }}
            >
              Sign up
            </Text>
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
  text: {
    marginBottom: 10,
    color: colors.primary,
    fontWeight: '500',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});
