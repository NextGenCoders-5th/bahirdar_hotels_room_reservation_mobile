import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppButton from '@/components/AppButton';
import { router } from 'expo-router';
import ImageButton from '@/components/ImageButton';
import { AppForm, FormField } from '@/components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
});

export default function SignInScreen() {
  const signupInitialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = () => {};

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
            />
          </View>
          <Pressable onPress={() => router.push('/forget-password')}>
            <Text style={styles.text}>Forgot password?</Text>
          </Pressable>
          <AppButton
            label='Sign in'
            onPress={() => {
              router.push('/home');
            }}
            buttonStyle={{
              backgroundColor: colors.yellow,
            }}
            labelStyle={{
              color: colors.greyDark,
            }}
          />
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
          <Pressable onPress={() => router.push('/signup')}>
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
