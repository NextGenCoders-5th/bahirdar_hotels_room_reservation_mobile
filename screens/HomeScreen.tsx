import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HotelsList from '../components/HotelsList';
import colors from '@/config/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Hotels</Text>
      <HotelsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black,
  },
});
