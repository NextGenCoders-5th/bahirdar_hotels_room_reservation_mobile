import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import HotelsList from '../components/HotelsList';
import colors from '@/config/colors';
import { Ionicons } from '@expo/vector-icons';
import AppText from '@/components/AppText';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/hotels/hotel-2.jpg')}
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'flex-end',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 5,
        }}
      >
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search here...'
            style={styles.input}
          ></TextInput>
          <Ionicons
            style={styles.icon}
            name='search'
            size={30}
            color={colors.grey}
          />
        </View>
      </ImageBackground>
      <View style={{ padding: 10 }}>
        <AppText
          style={{
            fontSize: 24,
            // marginBottom: 10,
            color: colors.black,
          }}
        >
          Featured Hotels
        </AppText>
        <HotelsList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: colors.white,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: colors.white,
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
