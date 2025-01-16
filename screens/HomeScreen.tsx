import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import HotelsList from '../components/HotelsList';
import colors from '@/config/colors';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Search hotels here...'
          style={styles.input}
        ></TextInput>
        <Ionicons
          style={styles.icon}
          name='search'
          size={30}
          color={colors.grey}
        />
      </View>
      <Text style={styles.title}>Featured Hotels</Text>
      <HotelsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: '100%',
    textAlign: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    color: colors.white,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 15,
    borderRadius: 15,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    fontSize: 16,
    color: colors.greyDark,
  },
});
