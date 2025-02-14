import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import HotelCard from '@/components/HotelCard';
import { useGetHotelsQuery } from '@/redux/api/hotelApi';

const HotelsList: React.FC = () => {
  const { data: fetchedHotels, error: hotelsError } = useGetHotelsQuery();
  // console.log('fetchedHotels', fetchedHotels);

  if (hotelsError) {
    return (
      <View>
        <Text>Error loading hotels</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {fetchedHotels &&
        fetchedHotels.results > 0 &&
        fetchedHotels.data.map((hotel) => (
          <HotelCard key={hotel._id} {...hotel} />
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
