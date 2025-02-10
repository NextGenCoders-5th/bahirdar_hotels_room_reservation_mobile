import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { IAddress } from '@/types/addressTypes';
import AppText from '@/components/AppText';
import colors from '@/config/colors';
import { LOCAL_HOST, LOCAL_HOST_IP } from '@/constants/env';
import { Link } from 'expo-router';

interface SearchedHotelProps {
  _id: string;
  name: string;
  imageCoverUrl: string;
  rating: number;
  address: IAddress;
}

export default function SearchedHotel({
  _id,
  name,
  imageCoverUrl,
  rating,
  address,
}: SearchedHotelProps) {
  const newImageCoverUrl = imageCoverUrl.replace(
    `${LOCAL_HOST}`,
    `${LOCAL_HOST_IP}`
  );

  return (
    <Link href={`/hotel/${_id}`} asChild>
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
          source={{ uri: newImageCoverUrl }}
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
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({});
