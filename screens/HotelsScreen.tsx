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
import { useLazyGetHotelsQuery } from '@/redux/api/hotelApi';
import HotelsList from '@/components/HotelsList';
import HotelCard from '@/components/HotelCard';
import LoadingIndicator from '@/components/LoadingIndicator';

export default function HotelsScreen() {
  const [searchText, setSearchText] = useState<string>('');
  const [
    triggerSearch,
    {
      data: searchedHotels,
      error: searchHotelsError,
      isLoading: searchIsLoading,
    },
  ] = useLazyGetHotelsQuery();

  useEffect(() => {
    if (searchText) {
      triggerSearch({ searchQuery: searchText });
    }
  }, [searchText]);

  if (searchHotelsError) {
    return (
      <View>
        <Text>Error loading hotels</Text>
      </View>
    );
  }

  if (searchIsLoading) {
    return <LoadingIndicator />;
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
          style={styles.image}
        >
          <View style={styles.searchContainer}>
            <Ionicons
              style={{ alignSelf: 'center', paddingLeft: 10 }}
              name='search'
              size={24}
              color={colors.grey}
            />
            <TextInput
              placeholder='Search here...'
              style={styles.input}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          {searchText ? (
            searchedHotels && searchedHotels?.data?.length > 0 ? (
              searchedHotels.data.map((hotel) => (
                <HotelCard key={hotel._id} {...hotel} />
              ))
            ) : (
              <View style={styles.noHotelFoundContainer}>
                <Text style={styles.noHotelFound}>
                  No hotel found. try another!
                </Text>
              </View>
            )
          ) : (
            <HotelsList />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: 5,
    borderRadius: 5,
  },
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
  noHotelFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noHotelFound: {
    fontSize: 18,
    color: colors.primaryDark,
    fontWeight: 'bold',
  },
});
