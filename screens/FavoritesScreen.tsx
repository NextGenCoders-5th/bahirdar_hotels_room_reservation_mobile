import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import AppText from '@/components/AppText';
import FavoriteCard from '@/components/FavoriteCard';
import hotels from '@/data/hotels';
import { useFavoriteHotels } from '@/hooks/useFavoriteHotels';

export default function FavoritesScreen() {
  const { favoriteHotels } = useFavoriteHotels();
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
