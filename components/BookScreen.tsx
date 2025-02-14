import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router, useGlobalSearchParams } from 'expo-router';

import colors from '@/config/colors';
import IconButton from './IconButton';
import AppText from './AppText';
import AppButton from './AppButton';
import { useGetRoomQuery } from '@/redux/api/roomApi';
import { useTransformImageUrl } from '@/hooks/useTransformImageUrl';
import LoadingIndicator from './LoadingIndicator';
import { useCreateBookingMutation } from '@/redux/api/bookingApi';
import { IBookingRequest, IBookingSummary } from '@/types/bookingTypes';
import { routes } from '@/routes';
import { useAuthContext } from '@/contexts/AuthContext';

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

  const { room_id } = useGlobalSearchParams();

  const { user: userData } = useAuthContext();

  const user = userData?.data;

  const {
    data,
    isLoading: roomIsLoading,
    error: roomError,
  } = useGetRoomQuery(room_id as string);

  const [createBooking, { isLoading: bookingIsLoading, error: bookingError }] =
    useCreateBookingMutation();

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

      const response = await createBooking(bookingData).unwrap();
      const { numOfNights, pricePerNight, totalPrice } = response?.data;
      setBookingSummary({
        numOfNights,
        pricePerNight,
        totalPrice,
      } as IBookingSummary);
      router.push(routes.HOME);
    } catch (error) {
      // console.log('booking error', error);
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
            <View style={styles.roomDetailsList}>
              <AppText style={styles.roomDetailsTitle}>Room number:</AppText>
              <Text style={styles.roomDetails}>{roomNumber}</Text>
            </View>
            <View style={styles.roomDetailsList}>
              <AppText style={styles.roomDetailsTitle}>Room type:</AppText>
              <Text style={styles.roomDetails}>{roomType}</Text>
            </View>
            <View style={styles.roomDetailsList}>
              <AppText style={styles.roomDetailsTitle}>Capacity:</AppText>
              <Text style={styles.roomDetails}>
                {capacity} {Number(capacity)! > 0 ? 'persons' : 'person'}
              </Text>
            </View>
            <View style={styles.roomDetailsList}>
              <AppText style={styles.roomDetailsTitle}>Price/night:</AppText>
              <Text style={styles.roomDetails}>{pricePerNight}</Text>
            </View>
            <View style={styles.roomDetailsList}>
              <AppText style={styles.roomDetailsTitle}>Facilities:</AppText>
              <Text style={styles.roomDetails}>
                {roomFacilities?.map((facility) => `${facility}, `)}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.roomDetails}>{description}</Text>
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
            <AppText style={styles.checkInOutText}>Check-in Date</AppText>
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
              buttonStyle={styles.checkInOutButton}
            />
            <View>
              <AppText style={styles.summaryText}>Number of nights</AppText>
              <AppText>{numOfNights} night</AppText>
            </View>
          </View>
          <View style={{ width: '50%', gap: 5 }}>
            <AppText style={styles.checkInOutText}>Check-out Date</AppText>
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
              buttonStyle={styles.checkInOutButton}
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
          buttonStyle={styles.bookButton}
        />

        {showCheckInPicker && (
          <DateTimePicker
            value={checkInDate || new Date()}
            minimumDate={new Date()}
            mode='date'
            display='default'
            onChange={(event, date) => handleConfirmDate(event, date, true)}
          />
        )}

        {showCheckOutPicker && (
          <DateTimePicker
            value={checkOutDate || new Date()}
            minimumDate={new Date()}
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
            <AppText style={styles.summaryText}>Price per night</AppText>
            <AppText>${bookingSummary.pricePerNight!}</AppText>
          </View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <AppText style={styles.summaryText}>Number of nights</AppText>
            <AppText>{bookingSummary.numOfNights}</AppText>
          </View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <AppText style={styles.summaryText}>Total price</AppText>
            <AppText>${bookingSummary.totalPrice}</AppText>
          </View>
          <AppButton
            onPress={() => {}}
            label='Continue Payment with Chapa'
            buttonStyle={{
              borderRadius: 10,
              width: 280,
              padding: 10,
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  summaryText: { fontSize: 16, marginBottom: 0, color: colors.grey },
  roomDetailsList: {
    flexDirection: 'row',
    gap: 5,
  },
  roomDetailsTitle: {
    fontSize: 16,
    marginBottom: 0,
    fontWeight: '600',
  },
  roomDetails: {
    fontSize: 16,
    color: colors.grey,
  },
  checkInOutText: {
    fontSize: 16,
    marginBottom: 0,
    color: colors.grey,
  },
  checkInOutButton: {
    padding: 10,
    marginVertical: 0,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primaryDark,
  },
  bookButton: {
    marginTop: 20,
    width: 120,
    padding: 10,
    borderRadius: 10,
  },
});
