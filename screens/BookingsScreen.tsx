import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react';

import colors from '@/config/colors';
import {
  useGetCurrentUserQuery,
  useGetUserWithBookingDetailsQuery,
} from '@/redux/userApi';
import AppText from '@/components/AppText';

const bookings = [
  {
    checkIn: '2/13/2025',
    checkOut: '2/15/2025',
    nights: '2 nights',
    totalPrice: '$2000',
    status: 'Pending',
  },
  {
    checkIn: '2/13/2025',
    checkOut: '2/15/2025',
    nights: '2 nights',
    totalPrice: '$6600',
    status: 'Pending',
  },
  {
    checkIn: '2/13/2025',
    checkOut: '2/15/2025',
    nights: '2 nights',
    totalPrice: '$6600',
    status: 'Pending',
  },
  {
    checkIn: '2/14/2025',
    checkOut: '2/15/2025',
    nights: '1 night',
    totalPrice: '$2800',
    status: 'Pending',
  },
];

export default function BookingTable() {
  const { data: userData } = useGetCurrentUserQuery();
  const { _id } = userData?.data || {};

  // console.log('userData', userData);
  // console.log('_id', _id);

  const {
    data: bookingData,
    isLoading,
    error,
  } = useGetUserWithBookingDetailsQuery(_id);
  // console.log('bookingData', bookingData)

  return (
    <View style={{ paddingHorizontal: 5 }}>
      <AppText>My Bookings</AppText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Table Header */}
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Check-In</Text>
            <Text style={styles.headerText}>Check-Out</Text>
            <Text style={styles.headerText}>Nights</Text>
            <Text style={styles.headerText}>Total Price</Text>
            <Text style={styles.headerText}>Status</Text>
          </View>

          {/* Table Rows */}
          {bookings.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.checkIn}</Text>
              <Text style={styles.cell}>{item.checkOut}</Text>
              <Text style={styles.cell}>{item.nights}</Text>
              <Text style={styles.cell}>{item.totalPrice}</Text>
              <Text style={[styles.cell, styles.status]}>{item.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 3,
    padding: 5,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: colors.primaryDark,
    paddingVertical: 10,
    // paddingHorizontal: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    width: 100,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.greyLight,
    paddingVertical: 8,
    // paddingHorizontal: 5,
  },
  cell: {
    width: 100, // Same width as header for alignment
    textAlign: 'center',
    color: colors.black,
  },
  status: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
