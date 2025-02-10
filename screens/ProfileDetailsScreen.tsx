import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { useAuth } from '@/hooks/authContext';
import { useGetCurrentUserQuery } from '@/redux/userApi';

export default function ProfileDetailsScreen() {
  // const { user } = useAuth();
  // console.log('user', user);
  // const { data } = useGetCurrentUserQuery();
  // console.log('data', data);

  const { data, isLoading, error } = useGetCurrentUserQuery();
  const user = data?.data;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, padding: 20 }}>
        <AppText style={{ fontSize: 20 }}>Your Personal Information</AppText>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Full name</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            {user?.firstName
              ? `${user?.firstName} ${user?.lastName}`
              : '_______'}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Email</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            {user?.email}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Username</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            {user?.username}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Phone number</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            {user?.phoneNumber ? user?.phoneNumber : '_______'}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Date of birth</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            {user?.dateOfBirth ? user?.dateOfBirth : '_______'}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Gender</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            {user?.gender ? `${user.gender}` : '_______'}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Address</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            {user?.address ? `${user.address}` : '_______'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    position: 'relative',
    height: 200,
    width: '100%',
    backgroundColor: colors.primary,
    padding: 20,
    marginBottom: 70,
  },
  marginBottom: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    width: 150,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
});
