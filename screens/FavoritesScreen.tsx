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
        <AppText
          style={{
            fontSize: 20,
            textTransform: 'capitalize',
          }}
        >
          No favorite hotels.
        </AppText>
        <AppButton
          label='Go to Home'
          onPress={() => {
            router.push(routes.HOME);
          }}
          buttonStyle={{
            width: 'auto',
            padding: 12,
            borderRadius: 10,
          }}
          labelStyle={{
            fontSize: 16,
            color: colors.white,
          }}
        />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <AppText
        style={{ fontSize: 20, marginBottom: 20, textTransform: 'capitalize' }}
      >
        Your favorite hotels
      </AppText>

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
});
