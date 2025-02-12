import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '@/config/colors';
import IconButton from './IconButton';
import AppText from './AppText';
import AppButton from './AppButton';
import { useGlobalSearchParams } from 'expo-router';
import { useGetRoomQuery } from '@/redux/roomApi';
import { useTransformImageUrl } from '@/hooks/useTransformImageUrl';
import LoadingIndicator from './LoadingIndicator';
import { useCreateBookingMutation } from '@/redux/bookingApi';
import { useGetCurrentUserQuery } from '@/redux/userApi';
import { IBookingRequest, IBookingSummary } from '@/types/bookingTypes';

const BookScreen = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);

  const [bookingSummary, setBookingSummary] = useState<IBookingSummary | null>(
    null
  );

  const numOfNights =
    checkInDate &&
    checkOutDate &&
    Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    );

  const { hotel_id, room_id } = useGlobalSearchParams();
  // console.log('in Book', hotel_id, room_id);

  const { data: userData } = useGetCurrentUserQuery();

  const user = userData?.data;

  const {
    data,
    isLoading: roomIsLoading,
    error: roomError,
  } = useGetRoomQuery(room_id as string);

  const [createBooking, { isLoading: bookingIsLoading, error: bookingError }] =
    useCreateBookingMutation();

  // console.log(data);
  const {
    roomNumber,
    roomType,
    capacity,
    pricePerNight,
    roomFacilities,
    images,
    description,
  } = data?.data || {};

  const handleBooking = async () => {
    try {
      const bookingData = {
        user: user?._id,
        room: room_id,
        checkIn: checkInDate?.toISOString(),
        checkOut: checkOutDate?.toISOString(),
      } as IBookingRequest;

      // console.log('bookingData', bookingData);
      const response = await createBooking(bookingData).unwrap();
      const { numOfNights, pricePerNight, totalPrice } = response.data;
      setBookingSummary({
        numOfNights,
        pricePerNight,
        totalPrice,
      } as IBookingSummary);
      // console.log(response);
    } catch (error) {
      console.log('booking error', error);
    }
  };

  const handleConfirmDate = (
    event: any,
    selectedDate: Date | undefined,
    isCheckIn: boolean
  ) => {
    if (selectedDate) {
      isCheckIn ? setCheckInDate(selectedDate) : setCheckOutDate(selectedDate);
    }
    setShowCheckInPicker(false);
    setShowCheckOutPicker(false);
  };

  if (roomIsLoading || bookingIsLoading) {
    return <LoadingIndicator />;
  }
  const imageUrl = useTransformImageUrl({ imageUrl: images![0] });

  if (roomError) {
    return (
      <View>
        <Text>Error loading room...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: colors.white, padding: 10 }}>
        <View style={{ marginBottom: 20 }}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
          />
          <View style={{ marginTop: 5 }}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <AppText
                style={{ fontSize: 16, marginBottom: 0, fontWeight: '600' }}
              >
                Room number:
              </AppText>
              <Text style={{ fontSize: 16, color: colors.grey }}>
                {roomNumber}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <AppText
                style={{ fontSize: 16, marginBottom: 0, fontWeight: '600' }}
              >
                Room type:
              </AppText>
              <Text style={{ fontSize: 16, color: colors.grey }}>
                {roomType}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <AppText
                style={{ fontSize: 16, marginBottom: 0, fontWeight: '600' }}
              >
                Capacity:
              </AppText>
              <Text style={{ fontSize: 16, color: colors.grey }}>
                {capacity} {Number(capacity)! > 0 ? 'persons' : 'person'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <AppText
                style={{ fontSize: 16, marginBottom: 0, fontWeight: '600' }}
              >
                Price/night:
              </AppText>
              <Text style={{ fontSize: 16, color: colors.grey }}>
                {pricePerNight}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <AppText
                style={{ fontSize: 16, marginBottom: 0, fontWeight: '600' }}
              >
                Facilities:
              </AppText>
              <Text style={{ fontSize: 16, color: colors.grey }}>
                {roomFacilities?.map((facility) => `${facility}, `)}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={{ fontSize: 16, color: colors.grey }}>
                {description}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: '50%',

              gap: 5,
            }}
          >
            <AppText
              style={{ fontSize: 16, marginBottom: 0, color: colors.grey }}
            >
              Check-in Date
            </AppText>
            <IconButton
              icon='calendar-month'
              color={colors.primaryDark}
              size={18}
              label={
                checkInDate ? checkInDate.toDateString() : 'Select Check-in'
              }
              onPress={() => setShowCheckInPicker(true)}
              labelStyle={{
                fontSize: 14,
                marginLeft: 2,
                color: colors.primary,
              }}
              buttonStyle={{
                // width: '50%',
                padding: 10,
                marginVertical: 0,
                borderRadius: 10,
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: colors.primaryDark,
              }}
            />
            <View>
              <AppText
                style={{ fontSize: 16, marginBottom: 0, color: colors.grey }}
              >
                Number of nights
              </AppText>
              <AppText>{numOfNights} night</AppText>
            </View>
          </View>
          <View style={{ width: '50%', gap: 5 }}>
            <AppText
              style={{
                fontSize: 16,
                marginBottom: 0,
                color: colors.grey,
              }}
            >
              Check-out Date
            </AppText>
            <IconButton
              icon='calendar-month'
              color={colors.primaryDark}
              size={18}
              label={
                checkOutDate ? checkOutDate.toDateString() : 'Select Check-out'
              }
              onPress={() => setShowCheckOutPicker(true)}
              labelStyle={{
                fontSize: 14,
                marginLeft: 2,
                color: colors.primary,
              }}
              buttonStyle={{
                // width: '50%',
                padding: 10,
                marginVertical: 0,
                borderRadius: 10,
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: colors.primaryDark,
              }}
            />

            <View>
              <AppText
                style={{ fontSize: 16, marginBottom: 0, color: colors.grey }}
              >
                Total price
              </AppText>
              <AppText>${numOfNights && numOfNights * pricePerNight!}</AppText>
            </View>
          </View>
        </View>

        <AppButton
          label='Book Room'
          disabled={!checkInDate || !checkOutDate}
          onPress={handleBooking}
          buttonStyle={{
            marginTop: 20,
            width: 120,
            padding: 10,
            borderRadius: 10,
            backgroundColor:
              !checkInDate || !checkOutDate
                ? colors.primary
                : colors.primaryDark,
          }}
        />

        {/* {bookingError && bookingError?.data.message && (
        <ErrorMessage error={error.data.message} visible={true} />
      )} */}

        {showCheckInPicker && (
          <DateTimePicker
            value={checkInDate || new Date()}
            mode='date'
            display='default'
            onChange={(event, date) => handleConfirmDate(event, date, true)}
          />
        )}

        {showCheckOutPicker && (
          <DateTimePicker
            value={checkOutDate || new Date()}
            mode='date'
            display='default'
            onChange={(event, date) => handleConfirmDate(event, date, false)}
          />
        )}
      </View>
      {bookingSummary && (
        <View style={{ padding: 10 }}>
          <AppText style={{ fontSize: 20 }}>Booking Summary</AppText>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <AppText
              style={{ fontSize: 16, marginBottom: 0, color: colors.grey }}
            >
              Price per night
            </AppText>
            <AppText>${bookingSummary.pricePerNight!}</AppText>
          </View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <AppText
              style={{ fontSize: 16, marginBottom: 0, color: colors.grey }}
            >
              Number of nights
            </AppText>
            <AppText>{bookingSummary.numOfNights}</AppText>
          </View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <AppText
              style={{ fontSize: 16, marginBottom: 0, color: colors.grey }}
            >
              Total price
            </AppText>
            <AppText>${bookingSummary.totalPrice}</AppText>
          </View>
          <AppButton
            onPress={() => {}}
            label='Continue Payment with Chapa'
            buttonStyle={{
              borderRadius: 10,
              width: 240,
              padding: 10,
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default BookScreen;
