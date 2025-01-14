import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '@/redux/slices/hotelsSlice';
import { AppDispatch, RootState } from '@/redux/store';
import HotelCard from '@/components/HotelCard';

const HotelsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { hotels, isLoading, error } = useSelector(
    (state: RootState) => state.hotels
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading hotels...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item._id}
        renderItem={({ item: hotel }) => (
          <HotelCard
            imageUrl={hotel.imageCover}
            name={hotel.name}
            address={hotel.address}
            pricePerNight={hotel.minPricePerNight}
            rating={hotel.avgRating}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HotelsList;
