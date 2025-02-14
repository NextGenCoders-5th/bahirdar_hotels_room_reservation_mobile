import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import { useAuthContext } from '@/contexts/AuthContext';
import { useGetAllUserBookingsQuery } from '@/redux/bookingApi';
import { formatDate } from '@/utils/formatDate';
import LoadingIndicator from '@/components/LoadingIndicator';

export default function BookingTable() {
  const { user } = useAuthContext();
  const { _id } = user?.data || {};

  const {
    data: bookingData,
    isLoading,
    error,
  } = useGetAllUserBookingsQuery(_id as string);

  if (isLoading)
    return <LoadingIndicator message='Loading booking history...' />;

  if (error)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>
          Error loading booking history 😞
        </Text>
      </View>
    );

  return (
    <View style={{ paddingHorizontal: 5 }}>
      <AppText>My Bookings</AppText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Table Header */}
          <View style={styles.headerRow}>
            <Text style={[styles.headerText, { width: 150 }]}>Check-In</Text>
            <Text style={[styles.headerText, { width: 150 }]}>Check-Out</Text>
            <Text style={styles.headerText}>Nights</Text>
            <Text style={styles.headerText}>Total Price</Text>
            <Text style={styles.headerText}>Status</Text>
          </View>
          {/* Table Rows */}
          {bookingData &&
            bookingData.data.map((item) => (
              <View key={item._id} style={styles.row}>
                <Text style={[styles.cell, { width: 150 }]}>
                  {formatDate(item.checkIn)}
                </Text>
                <Text style={[styles.cell, { width: 150 }]}>
                  {formatDate(item.checkOut)}
                </Text>
                <Text style={styles.cell}>{item.numOfNights}</Text>
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
