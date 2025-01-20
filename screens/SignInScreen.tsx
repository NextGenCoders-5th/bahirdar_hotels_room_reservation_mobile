import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppTextInput from '@/components/AppTextInput';
import AppButton from '@/components/AppButton';
import { router } from 'expo-router';
import IconButton from '@/components/IconButton';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          resizeMode: 'cover',
          alignSelf: 'center',
          marginVertical: 20,
        }}
        source={require('@/assets/images/get-started.png')}
      />
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
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
            Email address
          </AppText>
          <AppTextInput placeholder='Email' />
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
            Password
          </AppText>
          <AppTextInput
            placeholder='Password'
            secureTextEntry
            cursorColor={colors.primaryDark}
          />
        </View>
        <Pressable onPress={() => router.push('/forget-password')}>
          <Text style={styles.text}>Forgot password?</Text>
        </Pressable>
        <AppButton
          title='Sign in'
          onPress={() => {
            router.push('/home');
          }}
          boxStyle={{
            backgroundColor: colors.yellow,
          }}
          textStyle={{
            color: colors.greyDark,
          }}
        />

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
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginBottom: 20,
            justifyContent: 'center',
          }}
        >
          <IconButton
            icon={require('@/assets/images/google.jpeg')}
            onPress={() => {}}
          />
          <IconButton
            icon={require('@/assets/images/facebook.jpg')}
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
