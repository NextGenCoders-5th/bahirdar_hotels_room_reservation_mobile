import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

import AppText from '@/components/AppText';
import colors from '@/config/colors';
import IconButton from './IconButton';
import { IFavoriteHotel } from '@/types/hotelTypes';
import { useFavoriteHotels } from '@/hooks/useFavoriteHotels';

export default function FavoriteCard({
  _id,
  name,
  imageUrl,
  avgRating,
  address,
}: IFavoriteHotel) {
  const { isFavorite, addFavoriteHotel, removeFavoriteHotel } =
    useFavoriteHotels();

  function handleToggleFavorite() {
    if (isFavorite(_id)) {
      removeFavoriteHotel(_id);
    } else {
      addFavoriteHotel({
        _id,
        name,
        address,
        imageUrl,
        avgRating,
      });
    }
  }

  return (
    <Link href={`/hotels/${_id}`} asChild>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.primaryExtraLight2,
          borderRadius: 5,
          overflow: 'hidden',
          marginBottom: 20,
          gap: 10,
          flex: 1,
          position: 'relative',
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            height: 90,
            width: 80,
            borderRadius: 10,
          }}
        />

        <View style={{ flex: 1 }}>
          <AppText
            style={{
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            {name}
          </AppText>

          <Text style={{ color: colors.grey, fontSize: 14, marginBottom: 5 }}>
            {address.city}-{address.subcity}
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Ionicons name='star' size={18} color={colors.yellow} />
            <Text
              style={{
                color: colors.primaryDark,
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              {avgRating}
            </Text>
          </View>
        </View>

        <IconButton
          icon={'heart'}
          onPress={handleToggleFavorite}
          size={34}
          color={isFavorite(_id) ? colors.red : colors.white}
          buttonStyle={{
            position: 'absolute',
            right: 0,
            top: -12,
            width: 'auto',
            padding: 0,
            margin: 0,
            backgroundColor: 'transparent',
          }}
        />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({});
