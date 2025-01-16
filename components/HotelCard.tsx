import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Address } from '@/types/address';
import colors from '@/config/colors';
import { router } from 'expo-router';

export type HotelCardProps = {
  imageUrl: string;
  name: string;
  address: Address;
  pricePerNight: number;
  rating: number;
};

const HotelCard: React.FC<HotelCardProps> = ({
  imageUrl,
  name,
  address,
  pricePerNight,
  rating,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const imgUrl = require('@/assets/images/hotels/hotel-4.jpg');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handlePress = () => {
    router.push('/hotel-details');
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Image source={imgUrl} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite} style={styles.heartIcon}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? colors.primaryDark : colors.grey}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.hotelName}>{name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name='star' size={16} color={colors.yellow} />
            <Text style={styles.rating}>{rating.toFixed(1)} (11 reviews)</Text>
          </View>
        </View>
        <Text style={styles.hotelAddress}>
          {address.city} - {address.subcity}
        </Text>
        <View style={[styles.row, { paddingRight: 10 }]}>
          <Text style={styles.price}>
            ${pricePerNight}
            <Text style={{ fontWeight: '300' }}>/night</Text>
          </Text>
          <TouchableOpacity>
            <Text style={styles.book}>Book now</Text>
          </TouchableOpacity>
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
    marginVertical: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  book: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 50,
    padding: 5,
  },
  infoContainer: {
    padding: 10,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.greyDark,
  },
  hotelAddress: {
    fontSize: 14,
    color: colors.grey,
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.primaryDark,
    padding: 10,
    borderRadius: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    marginLeft: 4,
    color: colors.greyDark,
  },
});

export default HotelCard;
