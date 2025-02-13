import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

import HotelsList from '@/components/HotelsList';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { useGetHotelsQuery } from '@/redux/hotelApi';
import { routes } from '@/routes';
import AppButton from '@/components/AppButton';
import LoadingIndicator from '@/components/LoadingIndicator';
import TextSlider from '@/components/TextSlider';
import IconButton from '@/components/IconButton';
import LoginRemainder from '@/components/LoginRemainder';
import { useAuthContext } from '@/hooks/AuthContext';
import { useGetCurrentUserQuery } from '@/redux/userApi';
import { useGetAllUserBookingsQuery } from '@/redux/bookingApi';

export default function HomeScreen() {
  const {
    isLoading: hotelsLoading,
    error: hotelsFetchingError,
    refetch,
  } = useGetHotelsQuery();

  const { data, isLoading: userIsLoading } = useGetCurrentUserQuery();
  const { firstName } = data?.data || {};

  const { logout, user, loading } = useAuthContext();
  const { username } = user?.data || {};

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  if (loading) {
    return <LoadingIndicator message='Signing out...' />;
  }

  if (hotelsLoading) {
    return <LoadingIndicator message='Loading hotels...' />;
  }

  const handleLogout = async () => {
    closeMenu();
    logout();
  };

  if (hotelsFetchingError) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text style={{ fontSize: 18 }}>Error fetching hotels</Text>
        <AppButton
          label='Retry'
          onPress={() => refetch()}
          buttonStyle={{
            backgroundColor: colors.primaryDark,
            width: 100,
            padding: 10,
            borderRadius: 10,
          }}
          labelStyle={{
            color: colors.white,
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        height: 200,
        width: '100%',
      }}
    >
      {!user ? (
        <LoginRemainder />
      ) : (
        <View
          style={{
            backgroundColor: colors.primaryDark,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 5,
          }}
        >
          <Text
            style={{
              color: colors.primaryLight,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Welcome, {firstName || username}
          </Text>

          <IconButton
            onPress={toggleMenu}
            size={36}
            icon={menuVisible ? 'close' : 'menu'}
            buttonStyle={{
              top: -5,
              width: 40,
              padding: 0,
              marginVertical: 5,
              borderRadius: 0,
            }}
          />
          {menuVisible && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 40,
                borderColor: colors.greyLight,
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: colors.white,
                zIndex: 1,
                padding: 10,
              }}
            >
              <IconButton
                icon='account'
                color={colors.primaryDark}
                label='Profile'
                onPress={() => {
                  closeMenu();
                  router.push(routes.PROFILE_DETAILS);
                }}
                buttonStyle={{
                  padding: 5,
                  justifyContent: 'flex-start',
                  borderBottomWidth: 2,
                  borderBottomColor: colors.primaryLight,
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  width: 150,
                  marginVertical: 0,
                }}
                labelStyle={{ color: colors.primaryDark }}
              />

              <IconButton
                icon='calendar'
                color={colors.primaryDark}
                label='Bookings'
                onPress={() => {
                  closeMenu();
                  router.push(routes.BOOKINGS);
                }}
                buttonStyle={{
                  padding: 5,
                  justifyContent: 'flex-start',
                  borderBottomWidth: 2,
                  borderBottomColor: colors.primaryLight,
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  width: 150,
                  marginVertical: 0,
                }}
                labelStyle={{ color: colors.primaryDark }}
              />
              <IconButton
                icon='logout'
                color={colors.primaryDark}
                label='Sign out'
                onPress={() => {
                  handleLogout();
                }}
                buttonStyle={{
                  padding: 5,
                  justifyContent: 'flex-start',
                  borderBottomWidth: 2,
                  borderBottomColor: colors.primaryLight,
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  width: 150,
                  marginVertical: 0,
                }}
                labelStyle={{ color: colors.primaryDark }}
              />
            </View>
          )}
        </View>
      )}
      <ScrollView style={styles.container}>
        <TextSlider />

        <View style={{ padding: 10 }}>
          <AppText
            style={{
              fontSize: 24,
              marginBottom: 10,
              color: colors.black,
            }}
          >
            Featured Hotels
          </AppText>
          <HotelsList />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  icon: {
    width: 60,
    height: '100%',
    textAlign: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    color: colors.white,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 15,
    borderRadius: 15,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    fontSize: 16,
    color: colors.greyDark,
  },
});
