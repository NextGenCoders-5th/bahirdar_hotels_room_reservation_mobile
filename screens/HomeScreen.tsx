import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { routes } from '@/routes';
import AppButton from '@/components/AppButton';
import LoadingIndicator from '@/components/LoadingIndicator';
import TextSlider from '@/components/TextSlider';
import IconButton from '@/components/IconButton';
import LoginRemainder from '@/components/LoginRemainder';
import { useAuthContext } from '@/contexts/AuthContext';
import { useGetCurrentUserQuery } from '@/redux/api/userApi';
import { useGetPopularHotelsQuery } from '@/redux/api/recommendationsApi';
import HotelCard from '@/components/HotelCard';

export default function HomeScreen() {
  const { data, isLoading: userIsLoading } = useGetCurrentUserQuery();
  const { firstName } = data?.data || {};

  const {
    data: popularHotels,
    isLoading: popularHotelsIsLoading,
    error: popularHotelsError,
    refetch,
  } = useGetPopularHotelsQuery();

  const { logout, user } = useAuthContext();
  const { username } = user?.data || {};

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  if (popularHotelsIsLoading) {
    return <LoadingIndicator message='Loading hotels...' />;
  }

  const handleLogout = async () => {
    closeMenu();
    logout();
  };

  if (popularHotelsError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={{ fontSize: 18 }}>Error fetching hotels</Text>
        <AppButton
          label='Retry'
          onPress={() => refetch()}
          buttonStyle={styles.errorButtonStyle}
          labelStyle={{
            color: colors.white,
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!user ? (
        <LoginRemainder />
      ) : (
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>
            Welcome, {firstName || username}
          </Text>

          <IconButton
            onPress={toggleMenu}
            size={36}
            icon={menuVisible ? 'close' : 'menu'}
            buttonStyle={styles.toggleMenu}
          />
          {menuVisible && (
            <View style={styles.menus}>
              <IconButton
                icon='account'
                color={colors.primaryDark}
                label='Profile'
                onPress={() => {
                  closeMenu();
                  router.push(routes.PROFILE_DETAILS);
                }}
                buttonStyle={styles.buttonStyle}
                labelStyle={styles.labelStyle}
              />

              <IconButton
                icon='calendar'
                color={colors.primaryDark}
                label='Bookings'
                onPress={() => {
                  closeMenu();
                  router.push(routes.BOOKINGS);
                }}
                buttonStyle={styles.buttonStyle}
                labelStyle={styles.labelStyle}
              />
              <IconButton
                icon='logout'
                color={colors.primaryDark}
                label='Sign out'
                onPress={() => {
                  handleLogout();
                }}
                buttonStyle={styles.buttonStyle}
                labelStyle={styles.labelStyle}
              />
            </View>
          )}
        </View>
      )}
      <ScrollView style={styles.container}>
        <TextSlider />

        <View style={{ padding: 10 }}>
          <AppText style={styles.categoryTitle}>Popular Hotels</AppText>
          {popularHotels &&
            popularHotels.data.length > 0 &&
            popularHotels.data
              .slice(0, 4)
              .map((hotel) => <HotelCard key={hotel._id} {...hotel} />)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    width: '100%',
  },
  headerContainer: {
    position: 'relative',
    backgroundColor: colors.primaryDark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    zIndex: 1,
  },
  welcomeText: {
    color: colors.primaryLight,
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleMenu: {
    top: -5,
    width: 40,
    padding: 0,
    marginVertical: 5,
    borderRadius: 0,
  },
  menus: {
    position: 'absolute',
    top: 0,
    right: 40,
    borderColor: colors.greyLight,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    zIndex: 10,
    padding: 10,
  },
  buttonStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryLight,
    borderRadius: 0,
    backgroundColor: 'transparent',
    width: 150,
    marginVertical: 0,
  },
  labelStyle: {
    color: colors.primaryDark,
  },
  categoryTitle: {
    fontSize: 24,
    marginBottom: 10,
    color: colors.black,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  errorButtonStyle: {
    backgroundColor: colors.primaryDark,
    width: 100,
    padding: 10,
    borderRadius: 10,
  },
});
