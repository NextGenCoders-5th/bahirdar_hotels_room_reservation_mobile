import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '@/config/colors';
import IconButton from './IconButton';
import AppText from './AppText';
import AppButton from './AppButton';
import { useGlobalSearchParams } from 'expo-router';
import { useGetRoomQuery } from '@/redux/roomApi';
import { useTransformImageUrl } from '@/hooks/useTransformImageUrl';
import LoadingIndicator from './LoadingIndicator';

const BookScreen = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);

  const { hotel_id, room_id } = useGlobalSearchParams();
  // console.log('in Book', hotel_id, room_id);

  const { data, isLoading, error } = useGetRoomQuery(room_id as string);
  // console.log(data);
  const {
    roomNumber,
    roomType,
    capacity,
    pricePerNight,
    roomFacilities,
    images,
  } = data?.data || {};

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

  if (isLoading) {
    return <LoadingIndicator />;
  }
  const imageUrl = useTransformImageUrl({ imageUrl: images![0] });

  if (error) {
    return (
      <View>
        <Text>Error loading room...</Text>
      </View>
    );
  }

  return (
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
            <Text style={{ fontSize: 16, color: colors.grey }}>{roomType}</Text>
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
        </View>
      </View>
      {/* <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
        Select Booking Dates
      </Text> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{}}>
          <AppText style={{ fontWeight: 'medium' }}>Check-in Date</AppText>
          <IconButton
            icon='calendar-month'
            color={colors.primaryDark}
            size={18}
            label={checkInDate ? checkInDate.toDateString() : 'Select Check-in'}
            onPress={() => setShowCheckInPicker(true)}
            labelStyle={{
              fontSize: 14,
              marginLeft: 2,
              color: colors.primary,
            }}
            buttonStyle={{
              width: 160,
              padding: 10,
              marginVertical: 0,
              borderRadius: 10,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: colors.primaryDark,
            }}
          />
        </View>

        <View style={{}}>
          <AppText style={{ fontWeight: 'medium' }}>Check-out Date</AppText>
          <IconButton
            icon='calendar-month'
            color={colors.primaryDark}
            size={18}
            label={
              checkOutDate ? checkOutDate.toDateString() : 'Select Check-out'
            }
            onPress={() => setShowCheckOutPicker(true)}
            labelStyle={{ fontSize: 14, marginLeft: 2, color: colors.primary }}
            buttonStyle={{
              width: 160,
              padding: 10,
              marginVertical: 0,
              borderRadius: 10,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: colors.primaryDark,
            }}
          />
        </View>
      </View>

      <AppButton
        label='Confirm Booking'
        disabled={!checkInDate || !checkOutDate}
        onPress={() => {
          console.log('Check-in Date: ', checkInDate);
          console.log('Check-out Date: ', checkOutDate);
          alert(
            `Booking from ${checkInDate?.toDateString()} to ${checkOutDate?.toDateString()}`
          );
        }}
        buttonStyle={{
          width: 150,
          padding: 10,
          borderRadius: 10,
          backgroundColor:
            !checkInDate || !checkOutDate ? colors.primary : colors.primaryDark,
        }}
        labelStyle={{ fontSize: 16 }}
      />

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dateButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
  },
  confirmButton: {
    backgroundColor: '#28A745',
    marginTop: 20,
  },
});

export default BookScreen;
