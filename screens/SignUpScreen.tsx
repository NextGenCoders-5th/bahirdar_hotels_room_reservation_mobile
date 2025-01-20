import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppTextInput from '@/components/AppTextInput';
import CheckBox from '@/components/CheckBox';
import AppButton from '@/components/AppButton';
import { router } from 'expo-router';
import IconButton from '@/components/IconButton';

export default function SignUpScreen() {
  const [isChecked, setIsChecked] = React.useState(true);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.primaryDark,
        // marginBottom: 5,
      }}
    >
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          resizeMode: 'cover',
          alignSelf: 'center',
          marginVertical: 40,
        }}
        source={require('@/assets/images/get-started.png')}
      />
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
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
            First Name
          </AppText>
          <AppTextInput placeholder='First name' />
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
            Last Name
          </AppText>
          <AppTextInput placeholder='Last name' />
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
            Email
          </AppText>
          <AppTextInput placeholder='Email' />
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ marginBottom: 0, fontWeight: '600' }}>
            Password
          </AppText>
          <AppTextInput secureTextEntry placeholder='Password' />
        </View>
        <CheckBox
          description='I agree to the terms and conditions'
          isChecked={isChecked}
          onToggle={() => {
            setIsChecked(!isChecked);
          }}
        />

        <AppButton
          title='Sign Up'
          onPress={() => {
            router.push('/signin');
          }}
          boxStyle={{ marginBottom: 15 }}
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
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push('/signin')}>
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
