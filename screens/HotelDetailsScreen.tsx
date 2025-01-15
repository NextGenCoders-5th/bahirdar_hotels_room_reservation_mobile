import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import colors from '@/config/colors';
import hotels from '@/data/hotels';

const HotelDetailsScreen: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    name,
    imageCover,
    avgRating: rating,
    minPricePerNight: pricePerNight,
    address,
    summary,
    description,
    facilities,
    hotelStar,
    numOfRatings,
    hotelImages,
    numOfRooms,
  } = hotels[3];

  const imgUrl = require('@/assets/images/hotels/hotel-4.jpg');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.card}>
      <View style={styles.imageContainer}>
        <Swiper
          showsButtons
          showsPagination
          // autoplay
          autoplayTimeout={5}
          loop
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          style={styles.swiper}
        >
          {hotelImages.map((imageUrl, index) => (
            <Image
              key={index}
              source={imageUrl}
              style={styles.image}
              resizeMode='cover'
            />
          ))}
        </Swiper>
        <TouchableOpacity onPress={toggleFavorite} style={styles.heartIcon}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? colors.primaryDark : colors.grey}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={[styles.hotelNameContainer, { marginBottom: 10 }]}>
          <Text style={styles.hotelName}>{name}</Text>
          <View style={styles.starContainer}>
            {Array.from({ length: hotelStar }).map((_, index) => (
              <Ionicons
                key={index}
                name='star'
                size={20}
                color={colors.primaryDark}
              />
            ))}
            <Text style={styles.mediumText}>Star</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Ionicons name='location' size={18} color={colors.primaryDark} />
          <Text style={styles.text}>
            {address.city} - {address.subcity}
          </Text>

          <View style={styles.starContainer}>
            <Ionicons name='star' size={16} color={colors.yellow} />
            <Text style={styles.mediumText}>{rating.toFixed(1)}</Text>
            <Text style={styles.text}> ({numOfRatings} reviews)</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.roomContainer}>
            <FontAwesome5 name='hotel' size={18} color={colors.primaryDark} />
            <Text style={styles.text}>{numOfRooms} Rooms</Text>
          </View>

          <View style={styles.roomContainer}>
            <Ionicons name='bed' size={18} color={colors.primaryDark} />
            <Text style={styles.text}>{numOfRooms} Beds</Text>
          </View>
        </View>

        <View style={[styles.bottomMargin, { marginTop: 30 }]}>
          <Text style={styles.largeText}>Summary</Text>
          <Text style={styles.text}>{summary}</Text>
        </View>

        <View style={styles.bottomMargin}>
          <Text style={styles.largeText}>Description</Text>
          <Text style={styles.text}>{description}</Text>
        </View>

        <View style={styles.bottomMargin}>
          <Text style={styles.largeText}>Facilities</Text>
          <View style={styles.facilityContainer}>
            {facilities.map((facility, index) => (
              <Text style={styles.facility} key={index}>
                {facility}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  swiper: {
    height: 200,
    width: '100%',
  },
  dot: {
    backgroundColor: colors.grey,
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  activeDot: {
    backgroundColor: colors.primaryDark,
    width: 18,
    height: 18,
    borderRadius: 9,
  },
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
  imageContainer: {
    position: 'relative',
  },
  roomContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  bottomMargin: {
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
  },
  largeText: {
    color: colors.greyDark,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 14,
    color: colors.grey,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  hotelNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingRight: 10,
    gap: 10,
  },
  mediumText: {
    fontSize: 16,
    marginLeft: 5,
    color: colors.greyDark,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: colors.primaryDark,
    color: colors.white,
    padding: 10,
    borderRadius: 5,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HotelDetailsScreen;
