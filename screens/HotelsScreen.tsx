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
import LoadingError from '@/components/LoadingError';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';

export default function HotelsScreen() {
  // const [searchText, setSearchText] = useState<string>('');
  const router = useRouter();
  const { search } = useLocalSearchParams();
  const [searchText, setSearchText] = useState<string>(
    search?.toString() || ''
  );

  const [
    triggerSearch,
    {
      data: searchedHotels,
      error: searchHotelsError,
      isLoading: searchIsLoading,
    },
  ] = useLazyGetHotelsQuery();

  // Trigger search when searchText changes
  useEffect(() => {
    if (searchText) {
      triggerSearch({ searchQuery: searchText });
    }
  }, [searchText]);

  // Update URL when searchText changes
  useEffect(() => {
    router.setParams({ search: searchText });
  }, [searchText]);

  if (searchHotelsError) {
    return <LoadingError message='Error loading hotels' />;
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
              style={styles.searchIcon}
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
        <View style={styles.searchedHotelsContainer}>
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
  searchIcon: {
    alignSelf: 'center',
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
    color: colors.greyDark,
  },
  searchedHotelsContainer: {
    flex: 1,
    padding: 20,
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
