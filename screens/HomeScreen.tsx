import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';

import HotelsList from '../components/HotelsList';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { useGetHotelsQuery } from '@/redux/hotelApi';
import ImageButton from '@/components/ImageButton';
import { routes } from '@/routes';
import AppButton from '@/components/AppButton';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useGetCurrentUserQuery } from '@/redux/userApi';
import TextSlider from '@/components/TextSlider';

export default function HomeScreen() {
  const {
    isLoading: hotelsLoading,
    error: hotelsFetchingError,
    refetch,
  } = useGetHotelsQuery();

  const { data } = useGetCurrentUserQuery();
  const user = data?.data;
  // const res = useGetCurrentUserQuery();
  // console.log('user', user);
  // console.log('currentUser', res);
  // console.log('user', user);

  const { profilePicture, username } = user || {};

  // const { user } = useAuth();
  // console.log('get current user from Home screen', res);

  if (hotelsLoading) {
    return <LoadingIndicator />;
  }

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
      {!user ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            flexWrap: 'wrap',
            backgroundColor: colors.primaryMediumLight,
          }}
        >
          <Pressable onPress={() => router.push(routes.SIGN_IN)}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.primaryDark,
                paddingRight: 5,
                fontSize: 18,
              }}
            >
              Log in
            </Text>
          </Pressable>
          <Text
            style={{
              color: colors.grey,
              fontSize: 18,
              marginRight: 2,
            }}
          >
            to book hotels.
          </Text>
          <Text
            style={{
              color: colors.grey,
              fontSize: 18,
              marginRight: 2,
            }}
          >
            Don't have an account?
          </Text>

          <Pressable onPress={() => router.push(routes.SIGN_UP)}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.primaryDark,
                paddingLeft: 3,
                fontSize: 18,
              }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: colors.primaryDark,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Text
            style={{
              color: colors.primaryLight,
              fontSize: 20,
            }}
          >
            Welcome, {username}
          </Text>
          <ImageButton
            imageUrl={{ uri: profilePicture }}
            onPress={() => router.push('/profile')}
            buttonStyle={{
              padding: 0,
              margin: 0,
            }}
          />
        </View>
      )}
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
