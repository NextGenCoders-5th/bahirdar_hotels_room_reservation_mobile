import AppText from '@/components/AppText';
import FavoriteCard from '@/components/FavoriteCard';
import hotels from '@/data/hotels';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <AppText
        style={{ fontSize: 20, marginBottom: 20, textTransform: 'capitalize' }}
      >
        Your favorite hotels
      </AppText>

      <FlatList
        data={hotels}
        keyExtractor={(hotel) => hotel._id.toString()}
        renderItem={({ item: hotel }) => (
          <FavoriteCard
            key={hotel._id}
            imageCover={hotel.imageCover}
            name={hotel.name}
            address={hotel.address}
            rating={hotel.avgRating}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
