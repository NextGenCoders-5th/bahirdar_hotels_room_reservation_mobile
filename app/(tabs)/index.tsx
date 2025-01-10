import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '@/store/slices/hotelsSlice';
import { AppDispatch, RootState } from '@/store/store';

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { hotels, isLoading, error } = useSelector(
    (state: RootState) => state.hotels
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Hotels</Text>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hotelItem}>
            <Text>{item.name}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Price: ${item.price}/night</Text>
          </View>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  hotelItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
