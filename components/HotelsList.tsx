import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '@/redux/slices/hotelsSlice';
import { AppDispatch, RootState } from '@/redux/store';
import HotelCard from '@/components/HotelCard';
import hotels from '@/data/hotels';

const HotelsList: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const { hotels, isLoading, error } = useSelector(
  //   (state: RootState) => state.hotels
  // );
  // console.log(hotels);

  // useEffect(() => {
  //   dispatch(fetchHotels());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <Text>Loading hotels...</Text>;
  // }

  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }

  return (
    <View style={styles.container}>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel._id}
          imageUrl={hotel.imageCover}
          name={hotel.name}
          address={hotel.address}
          pricePerNight={hotel.minPricePerNight}
          rating={hotel.avgRating}
          hotelStar={hotel.hotelStar}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HotelsList;
