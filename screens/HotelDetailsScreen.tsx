import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import colors from '@/config/colors';
import hotels from '@/data/hotels';
import AppText from '@/components/AppText';

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
  } = hotels[2];

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
          nextButton={
            <MaterialIcons
              name='navigate-next'
              size={50}
              color={colors.white}
            />
          }
          prevButton={
            <MaterialIcons
              name='navigate-before'
              size={50}
              color={colors.white}
            />
          }
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
        <View style={[styles.hotelNameContainer, { marginVertical: 10 }]}>
          <AppText style={{ fontSize: 22 }}>{name}</AppText>
          <View style={styles.starContainer}>
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

        <View style={styles.locationContainer}>
          <Ionicons name='location' size={18} color={colors.primaryDark} />
          <Text style={styles.text}>
            {address.city} - {address.subcity}
          </Text>

          <View style={styles.ratingContainer}>
            <Ionicons name='star' size={16} color={colors.primaryDark} />
            <AppText
              style={{
                fontSize: 16,
                marginLeft: 5,
                marginBottom: 0,
              }}
            >
              {rating.toFixed(1)}
            </AppText>
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
          <AppText>Summary</AppText>
          <Text style={styles.text}>{summary}</Text>
        </View>

        <View style={styles.bottomMargin}>
          <AppText>Description</AppText>
          <Text style={styles.text}>{description}</Text>
        </View>

        <View style={styles.bottomMargin}>
          <AppText>Services and Facilities</AppText>
          <View style={styles.facilityContainer}>
            {facilities.map((facility, index) => (
              <Text style={styles.facility} key={index}>
                {facility}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.bottomMargin}>
          <AppText>Rooms</AppText>
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
    backgroundColor: colors.white,
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 25,
  },
  activeDot: {
    backgroundColor: colors.primaryDark,
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 25,
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
    borderRadius: 10,
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
    justifyContent: 'space-between',
    marginTop: 8,
    paddingRight: 10,
    height: 40,
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
    gap: 5,
    bottom: 15,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HotelDetailsScreen;
