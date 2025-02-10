import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

import colors from '@/config/colors';
import AppButton from './AppButton';
import { IHotel } from '@/types/hotelTypes';
import { LOCAL_HOST } from '@/constants/env';
import { useFavoriteHotels } from '@/hooks/useFavoriteHotels';

const HotelCard: React.FC<IHotel> = ({
  _id,
  imageCover: imageUrl,
  name,
  address,
  minPricePerNight: pricePerNight,
  avgRating: rating,
  hotelStar,
}) => {
  // console.log('favoriteHotels', favoriteHotels);

  const newImageURL = imageUrl.replace(`${LOCAL_HOST}`, `${LOCAL_HOST}`);

  const { addFavoriteHotel, removeFavoriteHotel, isFavorite } =
    useFavoriteHotels();

  function handleToggleFavorite() {
    if (isFavorite(_id)) {
      removeFavoriteHotel(_id);
    } else {
      addFavoriteHotel({
        _id,
        name,
        address,
        imageUrl: newImageURL,
        avgRating: rating,
      });
    }
  }

  return (
    <View style={styles.card}>
      <View style={{ position: 'relative' }}>
        <Link href={`/hotel/${_id}`}>
          <Image
            source={{ uri: newImageURL }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
          />
        </Link>
        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <Ionicons
            name={isFavorite(_id) ? 'heart' : 'heart-outline'}
            size={34}
            color={isFavorite(_id) ? colors.red : colors.white}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 10,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.greyDark,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              bottom: 5,
            }}
          >
            {hotelStar &&
              Array.from({ length: hotelStar }).map((_, index) => (
                <Ionicons
                  key={index}
                  name='star'
                  size={20}
                  color={colors.primaryDark}
                  style={{
                    textShadowColor: colors.primaryDark,
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 3,
                  }}
                />
              ))}
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: colors.grey,
            marginVertical: 5,
          }}
        >
          {address.city} - {address.subcity}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: -5,
          }}
        >
          <Ionicons name='star' size={20} color={colors.yellow} />
          <Text
            style={{
              fontSize: 14,
              marginLeft: 4,
              color: colors.grey,
            }}
          >
            <Text
              style={{
                color: colors.primaryDark,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              {rating.toFixed(1)}
            </Text>{' '}
            (11 reviews)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              color: colors.primaryDark,
              padding: 10,
              borderRadius: 5,
            }}
          >
            ${pricePerNight}
            <Text
              style={{
                fontWeight: '300',
                fontSize: 16,
                color: colors.grey,
              }}
            >
              /night
            </Text>
          </Text>
          <AppButton
            label='View Details'
            onPress={() => {
              router.push(`/hotel/${_id}`);
            }}
            buttonStyle={{
              width: 'auto',
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default HotelCard;
