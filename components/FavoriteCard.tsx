import AppText from '@/components/AppText';
import colors from '@/config/colors';
import { Address } from '@/types/address';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageProps,
} from 'react-native';

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
    <View style={styles.card}>
      <View>
        <Image source={imageCover} style={styles.image} />
      </View>

      <View>
        <AppText
          style={{
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          {name}
        </AppText>

        <Text style={styles.text}>
          {address.city}-{address.subcity}
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 30,
            marginVertical: 4,
          }}
        >
          <View style={styles.ratingContainer}>
            <Ionicons name='star' size={18} color={colors.yellow} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>

          <Text
            style={{
              borderWidth: 2,
              borderColor: colors.primaryDark,
              color: colors.primaryDark,
              paddingVertical: 4,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            Book now
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={toggleFavorite}
        style={[
          styles.iconContainer,
          {
            backgroundColor: isFavorite ? colors.primary : colors.grey,
          },
        ]}
      >
        <Ionicons
          style={styles.icon}
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={isFavorite ? colors.primaryDark : colors.grey}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primaryExtraLight2,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    gap: 10,
    flex: 1,
  },
  iconContainer: {
    height: 40,
    width: 40,
    padding: 5,
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
  icon: {
    color: colors.white,
    alignSelf: 'center',
  },
  image: {
    height: 90,
    width: 80,
    borderRadius: 10,
  },
  text: {
    color: colors.grey,
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingText: {
    color: colors.greyDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
