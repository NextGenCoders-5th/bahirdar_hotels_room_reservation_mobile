import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Address } from '@/types/address';
import colors from '@/config/colors';
import { router } from 'expo-router';
import { ImageSourcePropType } from 'react-native';
import AppButton from './AppButton';

export type HotelCardProps = {
  imageUrl: ImageSourcePropType;
  name: string;
  address: Address;
  pricePerNight: number;
  rating: number;
  hotelStar: number;
};

const HotelCard: React.FC<HotelCardProps> = ({
  imageUrl,
  name,
  address,
  pricePerNight,
  rating,
  hotelStar,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handlePress = () => {
    router.push('/hotel-details');
  };

  return (
    <View style={styles.card}>
      <View style={{ position: 'relative' }}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={imageUrl}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleFavorite}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={34}
            color={isFavorite ? colors.red : colors.white}
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
            {Array.from({ length: hotelStar }).map((_, index) => (
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
            title='Book now'
            onPress={() => {}}
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
    marginVertical: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default HotelCard;
