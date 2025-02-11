import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from 'expo-router';

import colors from '@/config/colors';
import AppButton from '@/components/AppButton';
import { useGetRoomQuery } from '@/redux/roomApi';
import AppText from '@/components/AppText';
import LoadingIndicator from '@/components/LoadingIndicator';
import ImageSlider from '@/components/ImageSlider';
import { useTransformedImageUrls } from '@/hooks/useTransformImageUrls';

export default function RoomDetailsScreen() {
  // const { room_id } = useLocalSearchParams();
  const { hotel_id, room_id } = useGlobalSearchParams();
  // console.log('hotel_id', hotel_id);
  // console.log('room_id', room_id);

  const { data, isLoading, error } = useGetRoomQuery(room_id as string);
  // console.log('Room data', data);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Text>Error loading rooms...</Text>;
  }

  const {
    roomNumber,
    roomType,
    capacity,
    description,
    pricePerNight,
    roomFacilities,
    images,
  } = data?.data || {};

  const roomImageUrls = useTransformedImageUrls({
    imageUrls: images || [],
  });

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image
        // source={{ uri: roomImageUrls[0] }}
        source={{
          uri: roomImageUrls && roomImageUrls[0] ? roomImageUrls[0] : undefined,
        }}
        style={{ width: '100%', height: 250, borderRadius: 10 }}
      />
      <Text style={styles.roomNumber}>Room {roomNumber}</Text>
      <View style={{ padding: 5, marginBottom: 30 }}>
        <Text style={styles.roomType}>{roomType}</Text>
        <Text style={styles.capacity}>Capacity: {capacity} people</Text>
        <Text style={styles.price}>${pricePerNight} / night</Text>

        <AppText>Room Facilities</AppText>
        {roomFacilities && (
          <View style={styles.facilityContainer}>
            {roomFacilities.map((facility, index) => (
              <Text style={styles.facility} key={index}>
                {facility}
              </Text>
            ))}
          </View>
        )}
        <AppText style={{ marginTop: 10 }}>More Room Images</AppText>

        <ImageSlider images={roomImageUrls} />

        <Text style={styles.description}>{description}</Text>

        <AppButton
          label='Book now'
          onPress={() => {
            router.push(`/hotels/${hotel_id}/rooms/${room_id}/book`);
          }}
          buttonStyle={styles.bookNowButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  facilityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  facility: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
    color: colors.primaryDark,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  roomType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.greyDark,
    marginBottom: 5,
    textTransform: 'capitalize',
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
    fontSize: 16,
    color: colors.grey,
    marginVertical: 10,
  },
  bookNowButton: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
