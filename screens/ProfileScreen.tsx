import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

import Screen from '@/components/Screen';
import colors from '@/config/colors';
import IconButton from '@/components/IconButton';
import { router } from 'expo-router';
import { routes } from '@/routes';
import { useGetCurrentUserQuery } from '@/redux/api/userApi';
import LoadingIndicator from '@/components/LoadingIndicator';
import LoadingError from '@/components/LoadingError';

export default function ProfileScreen() {
  const { data, isLoading, error } = useGetCurrentUserQuery();
  const user = data?.data;

  if (isLoading) return <LoadingIndicator message='Loading your profile...' />;

  if (error) return <LoadingError message='Error loading profile' />;

  return (
    <Screen style={{ paddingTop: 0 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome, {user?.username}</Text>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('@/assets/images/profile/profile-1.jpg')}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <IconButton
          icon='chevron-forward-outline'
          iconDirection='right'
          onPress={() => router.push(routes.UPDATE_PROFILE)}
          label='Update profile'
          color={colors.primaryDark}
          labelStyle={styles.labelStyle}
          buttonStyle={styles.buttonStyle}
        />
        <IconButton
          icon='chevron-forward-outline'
          iconDirection='right'
          onPress={() => router.push(routes.BOOKINGS)}
          label='Bookings'
          color={colors.primaryDark}
          labelStyle={styles.labelStyle}
          buttonStyle={styles.buttonStyle}
        />
        <IconButton
          icon='chevron-forward-outline'
          iconDirection='right'
          onPress={() => router.push(routes.PROFILE_DETAILS)}
          label='Profile details'
          color={colors.primaryDark}
          labelStyle={styles.labelStyle}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: 120,
    width: '100%',
    backgroundColor: colors.primary,
    padding: 20,
    marginBottom: 50,
  },
  welcomeText: {
    color: colors.primaryExtraLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: -50,
    left: '38%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.white,
  },
  buttonsContainer: {
    flex: 1,
    padding: 10,
    marginVertical: 30,
    alignItems: 'flex-start',
  },
  labelStyle: {
    textTransform: 'capitalize',
    color: colors.primaryDark,
    fontSize: 18,
  },
  buttonStyle: {
    width: 'auto',
    borderRadius: 5,
    padding: 5,
    marginVertical: 0,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
});
