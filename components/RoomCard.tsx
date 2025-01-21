import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import { Image } from 'react-native';
import colors from '@/config/colors';
import AppButton from './AppButton';

interface RoomCardProps {
  roomNumber: string;
  roomType: string;
  roomFacilities: string[];
  capacity: number;
  description: string;
  pricePerNight: number;
  images: ImageSourcePropType[];
}

const { width: screenWidth } = Dimensions.get('window');

const RoomCard: React.FC<RoomCardProps> = ({
  roomNumber,
  roomType,
  roomFacilities,
  capacity,
  description,
  pricePerNight,
  images,
}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 20,
        shadowColor: colors.grey,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        width: 250,
        position: 'relative',
        backgroundColor: colors.white,
      }}
    >
      <Image
        source={images[0]}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          resizeMode: 'cover',
        }}
      />

      <Text style={styles.roomNumber}>Room #{roomNumber}</Text>
      <View style={{ padding: 15 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 5,
          }}
        >
          {roomType}
        </Text>
        <Text style={styles.capacity}>Capacity: {capacity} people</Text>
        <Text style={styles.price}>${pricePerNight} / night</Text>
        <Text style={styles.description}>{description}</Text>
        <AppButton
          label='Book now'
          onPress={() => {}}
          buttonStyle={{
            width: '100%',
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 5,
          }}
        />
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
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoomCard;
