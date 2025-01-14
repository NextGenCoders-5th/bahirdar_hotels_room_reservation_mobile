import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Address } from '@/types/address';
import colors from '@/config/colors';

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

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imgUrl} style={styles.image} />
        <TouchableOpacity onPress={toggleFavorite} style={styles.heartIcon}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? 'red' : colors.grey}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.hotelName}>{name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name='star' size={16} color='#FFD700' />
            <Text style={styles.rating}>{rating.toFixed(1)} (11 reviews)</Text>
          </View>
        </View>
        <Text style={styles.hotelAddress}>
          {address.city} - {address.subcity}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>${pricePerNight}/night</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: colors.primaryDark,
    color: colors.white,
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
