import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import AppText from '@/components/AppText';
import FavoriteCard from '@/components/FavoriteCard';
import hotels from '@/data/hotels';

export default function FavoritesTab() {
  return (
    <ScrollView style={styles.container}>
      <AppText
        style={{ fontSize: 20, marginBottom: 20, textTransform: 'capitalize' }}
      >
        Your favorite hotels
      </AppText>

      {hotels.map((hotel) => (
        <FavoriteCard
          key={hotel._id}
          imageCover={hotel.imageCover}
          name={hotel.name}
          address={hotel.address}
          rating={hotel.avgRating}
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
