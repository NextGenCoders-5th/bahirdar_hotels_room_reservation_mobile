import { View, Text, Image } from 'react-native';
import React from 'react';

import Screen from '@/components/Screen';
import colors from '@/config/colors';
import IconButton from '@/components/IconButton';
import { router } from 'expo-router';
import { routes } from '@/routes';
import { useGetCurrentUserQuery } from '@/redux/userApi';

export default function ProfileScreen() {
  const { data } = useGetCurrentUserQuery();
  const user = data?.data;
  // console.log('user', result);

  return (
    <Screen style={{ paddingTop: 0 }}>
      <View
        style={{
          position: 'relative',
          height: 120,
          width: '100%',
          backgroundColor: colors.primary,
          padding: 20,
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            color: colors.primaryExtraLight,
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Welcome, {user?.username}
        </Text>
        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            bottom: -50,
            left: '38%',
          }}
        >
          <Image
            source={require('@/assets/images/profile/profile-1.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: colors.white,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          padding: 10,
          marginVertical: 30,
          alignItems: 'flex-start',
        }}
      >
        <IconButton
          icon='chevron-forward-outline'
          iconDirection='right'
          onPress={() => router.push(routes.UPDATE_PROFILE)}
          label='Update profile'
          color={colors.primaryDark}
          labelStyle={{
            textTransform: 'capitalize',
            color: colors.primaryDark,
            fontSize: 18,
          }}
          buttonStyle={{
            width: 'auto',
            borderRadius: 5,
            padding: 5,
            marginVertical: 0,
            marginBottom: 10,
            backgroundColor: 'transparent',
          }}
        />
        <IconButton
          icon='chevron-forward-outline'
          iconDirection='right'
          onPress={() => router.push(routes.BOOKINGS)}
          label='Bookings'
          color={colors.primaryDark}
          labelStyle={{
            textTransform: 'capitalize',
            color: colors.primaryDark,
            fontSize: 18,
          }}
          buttonStyle={{
            width: 'auto',
            borderRadius: 5,
            padding: 5,
            marginVertical: 0,
            marginBottom: 10,
            backgroundColor: 'transparent',
          }}
        />
        <IconButton
          icon='chevron-forward-outline'
          iconDirection='right'
          onPress={() => router.push(routes.PROFILE_DETAILS)}
          label='Profile details'
          color={colors.primaryDark}
          labelStyle={{
            textTransform: 'capitalize',
            color: colors.primaryDark,
            fontSize: 18,
          }}
          buttonStyle={{
            width: 'auto',
            borderRadius: 5,
            padding: 5,
            marginVertical: 0,
            marginBottom: 10,
            backgroundColor: 'transparent',
          }}
        />
      </View>
    </Screen>
  );
}
