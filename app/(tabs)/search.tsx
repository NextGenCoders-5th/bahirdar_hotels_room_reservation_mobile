import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '@/store/slices/hotelsSlice';
import { AppDispatch, RootState } from '@/store/store';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { hotels, isLoading, error } = useSelector(
    (state: RootState) => state.hotels
  );
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  useEffect(() => {
    setFilteredHotels(hotels);
  }, [hotels]);

  const handleSearch = () => {
    const filtered = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder='Search hotels'
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title='Search' onPress={handleSearch} />
      <FlatList
        data={filteredHotels}
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
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  hotelItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
