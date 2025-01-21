import AppText from '@/components/AppText';
import colors from '@/config/colors';
import { Address } from '@/types/address';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageProps } from 'react-native';
import IconButton from './IconButton';
import AppButton from './AppButton';

interface FavoriteCardProps {
  name: string;
  imageCover: ImageProps;
  rating: number;
  address: Address;
}

export default function FavoriteCard({
  name,
  imageCover,
  rating,
  address,
}: FavoriteCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
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
        source={imageCover}
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
            {rating}
          </Text>
        </View>
      </View>

      <IconButton
        icon={isFavorite ? 'heart' : 'heart-outline'}
        onPress={toggleFavorite}
        size={34}
        color={isFavorite ? colors.red : colors.white}
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
      <AppButton
        label='View Details'
        onPress={() => {}}
        buttonStyle={{
          position: 'absolute',
          bottom: -6,
          right: 0,
          width: 'auto',
          margin: 0,
          padding: 6,
          borderRadius: 5,
        }}
        labelStyle={{
          fontSize: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
