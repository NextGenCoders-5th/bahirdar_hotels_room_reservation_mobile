import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import colors from '@/config/colors';
import SearchedHotel from '@/components/SearchedHotel';
import { useGetHotelsQuery, useLazyGetHotelsQuery } from '@/redux/hotelApi';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState<string>('');
  const [triggerSearch, { data: searchedHotels, error: searchHotelsError }] =
    useLazyGetHotelsQuery();

  const { data: fetchedHotels, error: fetchHotelsError } = useGetHotelsQuery();

  // Fetch hotels based on search text when it changes
  useEffect(() => {
    if (searchText) {
      triggerSearch(searchText);
    }
  }, [searchText]);

  if (searchHotelsError || fetchHotelsError) {
    return (
      <View>
        <Text>Error loading hotels</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          borderRadius: 5,
        }}
      >
        <ImageBackground
          source={require('@/assets/images/hotels/hotel-2.jpg')}
          style={{
            width: '100%',
            height: 150,
            justifyContent: 'flex-end',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 5,
            borderRadius: 5,
          }}
        >
          <View style={styles.searchContainer}>
            <TextInput
              placeholder='Search here...'
              style={styles.input}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <Ionicons
              onPress={() => triggerSearch(searchText)}
              style={styles.icon}
              name='search'
              size={30}
              color={colors.grey}
            />
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          {searchText ? (
            searchedHotels && searchedHotels?.data?.length > 0 ? (
              searchedHotels.data.map((hotel) => (
                <SearchedHotel
                  key={hotel._id}
                  _id={hotel._id}
                  imageCoverUrl={hotel.imageCover}
                  name={hotel.name}
                  address={hotel.address}
                  rating={hotel.avgRating}
                />
              ))
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.primaryDark,
                    fontWeight: 'bold',
                  }}
                >
                  No hotel found. try another!
                </Text>
              </View>
            )
          ) : (
            fetchedHotels &&
            fetchedHotels.data.map((hotel) => (
              <SearchedHotel
                key={hotel._id}
                _id={hotel._id}
                imageCoverUrl={hotel.imageCover}
                name={hotel.name}
                address={hotel.address}
                rating={hotel.avgRating}
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: colors.primaryExtraLight,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 10,
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: '100%',
    textAlign: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    color: colors.white,
    borderRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
    color: colors.greyDark,
  },
});
