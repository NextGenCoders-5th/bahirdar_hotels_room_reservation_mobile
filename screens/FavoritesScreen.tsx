import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { router } from 'expo-router';

import AppText from '@/components/AppText';
import FavoriteCard from '@/components/FavoriteCard';
import { useFavoriteHotelContext } from '@/contexts/FavoriteHotelsContext';
import AppButton from '@/components/AppButton';
import { routes } from '@/routes';
import colors from '@/config/colors';

export default function FavoritesScreen() {
  const { favoriteHotels } = useFavoriteHotelContext();
  if (favoriteHotels.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AppText style={styles.title}>No favorite hotels.</AppText>
        <AppButton
          label='Go to Home'
          onPress={() => {
            router.push(routes.HOME);
          }}
          buttonStyle={styles.buttonStyle}
          labelStyle={styles.labelStyle}
        />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <AppText style={styles.title}>Your favorite hotels</AppText>

      {favoriteHotels.map((hotel) => (
        <FavoriteCard
          _id={hotel._id}
          key={hotel._id}
          imageUrl={hotel.imageUrl}
          name={hotel.name}
          address={hotel.address}
          avgRating={hotel.avgRating}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  buttonStyle: {
    width: 'auto',
    padding: 12,
    borderRadius: 10,
  },
  labelStyle: {
    fontSize: 16,
    color: colors.white,
  },
});
