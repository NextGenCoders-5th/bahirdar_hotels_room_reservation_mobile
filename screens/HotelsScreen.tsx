import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

import HotelsList from '@/components/HotelsList';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { useGetHotelsQuery } from '@/redux/hotelApi';
import ImageButton from '@/components/ImageButton';
import { routes } from '@/routes';
import AppButton from '@/components/AppButton';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useGetCurrentUserQuery } from '@/redux/userApi';
import TextSlider from '@/components/TextSlider';
import AccountMenu from '@/components/AccountMenu';
import { Button, Divider, Menu, PaperProvider } from 'react-native-paper';
import IconButton from '@/components/IconButton';

export default function HotelsScreen() {
  const {
    isLoading: hotelsLoading,
    error: hotelsFetchingError,
    refetch,
  } = useGetHotelsQuery();

  const { data, isLoading: userIsLoading } = useGetCurrentUserQuery();
  const user = data?.data;
  const { profilePicture, username } = user || {};

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const res = useGetCurrentUserQuery();
  // console.log('user', user);
  // console.log('currentUser', res);j
  // console.log('user', user);
  // console.log('user id', user?._id);

  if (hotelsLoading || userIsLoading) {
    return <LoadingIndicator />;
  }
  // if (hotelsLoading) {
  //   return <LoadingIndicator />;
  // }

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
    <ScrollView style={styles.container}>
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
          }}
        >
          Welcome, Henok
        </Text>

        <ImageButton
          onPress={toggleMenu}
          imageUrl={require('@/assets/images/profile/profile-1.jpg')}
          imageStyle={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
          buttonStyle={{
            padding: 0,
            margin: 0,
          }}
        />
        {menuVisible && (
          <View
            style={{
              position: 'absolute',
              top: 5,
              right: 50,
              borderColor: colors.greyLight,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: colors.white,
              zIndex: 1,
            }}
          >
            <IconButton
              icon='account'
              color={colors.primaryDark}
              label='Profile'
              onPress={() => {
                closeMenu();
                router.push(routes.PROFILE);
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
              icon='heart'
              color={colors.primaryDark}
              label='Favorites'
              onPress={() => {
                router.push(routes.FAVORITES);
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
          </View>
        )}
      </View>

      {/* <TextSlider /> */}

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
