import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import RoomCard from '@/components/RoomCard';
import LoadingIndicator from '@/components/LoadingIndicator';
import AppButton from '@/components/AppButton';
import { useTransformImageUrl } from '@/hooks/useTransformImageUrl';
import { useTransformedImageUrls } from '@/hooks/useTransformImageUrls';
import { useGetHotelWithRoomsQuery } from '@/redux/hotelApi';
import { useFavoriteHotels } from '@/hooks/useFavoriteHotels';
import ImageSlider from '@/components/ImageSlider';
import MapComponent from '@/components/MapComponent';
import Screen from '@/components/Screen';

const HotelDetailsScreen: React.FC = () => {
  const { hotel_id } = useLocalSearchParams();
  // const { hotel_id: global_hotel_id } = useGlobalSearchParams();
  // const params = useLocalSearchParams();
  // console.log('params', params);
  // console.log('global_hotel_id', global_hotel_id);

  const { data, isLoading, error } = useGetHotelWithRoomsQuery(
    hotel_id as string
  );

  // console.log('Hotel with rooms', data?.data);

  const {
    _id,
    name,
    imageCover,
    avgRating: rating,
    address,
    summary,
    description,
    facilities,
    hotelStar,
    numOfRatings,
    hotelImages,
    numOfRooms,
    rooms,
    location,
  } = data?.data || {};

  const [latitude, longitude] = location?.coordinates || [];
  console.log(latitude, longitude);

  const newImageCoverUrl = useTransformImageUrl({ imageUrl: imageCover! });
  const newHotelImageUrls = useTransformedImageUrls({
    imageUrls: hotelImages || [],
  });

  const { isFavorite, removeFavoriteHotel, addFavoriteHotel } =
    useFavoriteHotels();

  function handleToggleFavorite() {
    if (!data?.data) return;
    if (isFavorite(_id!)) {
      removeFavoriteHotel(_id!);
    } else {
      addFavoriteHotel({
        _id: _id!,
        name: name!,
        address: address!,
        imageUrl: newImageCoverUrl,
        avgRating: rating!,
      });
    }
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 18 }}>Error fetching hotels</Text>
      <AppButton
        label='Retry'
        onPress={() => {}}
        buttonStyle={{
          backgroundColor: colors.primaryDark,
          width: 100,
          padding: 10,
          borderRadius: 10,
        }}
        labelStyle={{
          color: colors.white,
        }}
      />
    </View>;
  }

  return (
    <Screen>
      <ScrollView style={styles.card}>
        <View style={styles.imageContainer}>
          <ImageSlider images={newHotelImageUrls} />

          <TouchableOpacity
            onPress={handleToggleFavorite}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          >
            <Ionicons
              name={isFavorite(_id!) ? 'heart' : 'heart-outline'}
              size={34}
              color={isFavorite(_id!) ? colors.red : colors.white}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            // flex: 1,
            padding: 10,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 10,
              marginVertical: 5,
            }}
          >
            <AppText style={{ fontSize: 22 }}>{name}</AppText>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                bottom: 6,
              }}
            >
              {Array.from({ length: Number(hotelStar) }).map((_, index) => (
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

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              gap: 5,
            }}
          >
            <Ionicons name='location' size={18} color={colors.primaryDark} />
            {address && (
              <Text style={styles.text}>
                {address.city} - {address.subcity}
              </Text>
            )}
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Ionicons name='star' size={16} color={colors.yellow} />
            <AppText
              style={{
                fontSize: 16,
                marginLeft: 5,
                marginBottom: 0,
              }}
            >
              {rating && rating.toFixed(1)}
            </AppText>
            <Text style={styles.text}> ({numOfRatings} reviews)</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <View style={styles.roomContainer}>
              <FontAwesome5 name='hotel' size={18} color={colors.primaryDark} />
              <Text style={styles.text}>{numOfRooms} Rooms</Text>
            </View>
          </View>

          {location && location?.coordinates.length > 0 && (
            <MapComponent
              hotelName={name!}
              hotelCoords={{ latitude: 23, longitude: 37.410125 }}
            />
          )}

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
            {facilities && (
              <View style={styles.facilityContainer}>
                {facilities.map((facility, index) => (
                  <Text style={styles.facility} key={index}>
                    {facility}
                  </Text>
                ))}
              </View>
            )}
          </View>

          <View style={styles.bottomMargin}>
            <AppText
              style={{
                marginBottom: 10,
              }}
            >
              Available Hotel Rooms
            </AppText>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                backgroundColor: colors.primaryExtraLight,
                padding: 20,
                borderRadius: 10,
              }}
            >
              {rooms &&
                rooms.map((room, index) => <RoomCard key={index} {...room} />)}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Screen>
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
    flex: 1,
    backgroundColor: colors.white,
    // borderRadius: 10,
    // overflow: 'hidden',
    marginVertical: 10,
    // shadowColor: colors.black,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 6,
    // elevation: 3,
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

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: colors.primaryDark,
    color: colors.white,
    padding: 10,
    borderRadius: 5,
  },
});

export default HotelDetailsScreen;
