import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import colors from '@/config/colors';
import AppButton from './AppButton';
import { IRoom } from '@/types/roomTypes';
import { useTransformImageUrl } from '@/hooks/useTransformImageUrl';

const RoomCard: React.FC<IRoom> = ({
  _id,
  roomNumber,
  roomType,
  capacity,
  description,
  pricePerNight,
  images,
}) => {
  const { hotel_id } = useLocalSearchParams();

  const newImageUrl = useTransformImageUrl({ imageUrl: images[0] });

  return (
    <View
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10,
        shadowColor: colors.grey,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        width: 280,
        position: 'relative',
        backgroundColor: colors.white,
      }}
    >
      <Image
        source={{ uri: newImageUrl }}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          resizeMode: 'cover',
        }}
      />

      <Text style={styles.roomNumber}>Room #{roomNumber}</Text>
      <View style={{ padding: 5 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.greyDark,
            marginBottom: 5,
            textTransform: 'capitalize',
          }}
        >
          {roomType}
        </Text>
        <Text style={styles.capacity}>Capacity: {capacity} people</Text>
        <Text style={styles.price}>${pricePerNight} / night</Text>
        <Text style={styles.description}>{description}</Text>
        <View
          style={{
            paddingHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <AppButton
            label='Book now'
            onPress={() => {}}
            buttonStyle={styles.bookNowButton}
            labelStyle={styles.buttonLabel}
          />
          <AppButton
            label='View details'
            onPress={() => {
              router.push(`/hotels/${hotel_id}/rooms/${_id}`);
            }}
            buttonStyle={styles.bookNowButton}
            labelStyle={styles.buttonLabel}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: '100%',
    position: 'relative',
  },
  carouselContainer: {
    width: '100%',
    height: 200,
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  content: {
    padding: 15,
  },
  roomType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  roomNumber: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: colors.primaryDark,
    transform: [{ rotate: '-15deg' }],
  },
  capacity: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 10,
  },
  bookNowButton: {
    width: 120,
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 16,
  },
});

export default RoomCard;
