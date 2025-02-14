import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { useGetCurrentUserQuery } from '@/redux/api/userApi';
import { formatDate } from '@/utils/formatDate';
import LoadingIndicator from '@/components/LoadingIndicator';
import LoadingError from '@/components/LoadingError';

export default function ProfileDetailsScreen() {
  const { data, isLoading, error } = useGetCurrentUserQuery();
  const user = data?.data;

  if (isLoading) {
    return <LoadingIndicator message='Loading your profile...' />;
  }

  if (error) {
    return <LoadingError message='Error loading profile' />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, padding: 20 }}>
        <AppText style={{ fontSize: 20 }}>Your Personal Information</AppText>
        <View style={{ marginBottom: 10 }}>
          <AppText style={styles.profileFieldTitle}>Full name</AppText>
          <Text style={styles.profileFieldValue}>
            {user?.firstName
              ? `${user?.firstName} ${user?.lastName}`
              : '_______'}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={styles.profileFieldTitle}>Email</AppText>
          <Text style={styles.profileFieldValue}>{user?.email}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={styles.profileFieldTitle}>Username</AppText>
          <Text style={styles.profileFieldValue}>{user?.username}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={styles.profileFieldTitle}>Phone number</AppText>
          <Text style={styles.profileFieldValue}>
            {user?.phoneNumber ? user?.phoneNumber : '_______'}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={styles.profileFieldTitle}>Date of birth</AppText>
          <Text style={styles.profileFieldValue}>
            {user?.dateOfBirth ? formatDate(user?.dateOfBirth) : '_______'}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={styles.profileFieldTitle}>Gender</AppText>
          <Text style={styles.profileFieldValue}>
            {user?.gender ? `${user.gender}` : '_______'}
          </Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={{ width: '45%' }}>
            <AppText style={styles.profileFieldTitle}>Country</AppText>
            <Text style={styles.profileFieldValue}>
              {user?.address ? `${user.address.country}` : '_______'}
            </Text>
          </View>
          <View style={{ width: '45%' }}>
            <AppText style={styles.profileFieldTitle}>City</AppText>
            <Text style={styles.profileFieldValue}>
              {user?.address ? `${user.address.city}` : '_______'}
            </Text>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <View style={{ width: '45%' }}>
            <AppText style={styles.profileFieldTitle}>Subcity</AppText>
            <Text style={styles.profileFieldValue}>
              {user?.address ? `${user.address.subcity}` : '_______'}
            </Text>
          </View>
          <View style={{ width: '45%' }}>
            <AppText style={styles.profileFieldTitle}>Woreda</AppText>
            <Text style={styles.profileFieldValue}>
              {user?.address ? `${user.address.woreda}` : '_______'}
            </Text>
          </View>
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
  profileFieldValue: {
    fontSize: 16,
    backgroundColor: colors.primaryExtraLight2,
    padding: 10,
    borderRadius: 5,
    color: colors.greyMediumDark,
  },
  profileFieldTitle: {
    marginBottom: 10,
    flexDirection: 'row',
    gap: '10%',
  },
  addressContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    gap: '10%',
  },
});
