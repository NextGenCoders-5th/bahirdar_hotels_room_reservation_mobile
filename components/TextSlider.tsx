import colors from '@/config/colors';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function TextSlider() {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        loop
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        <View style={styles.slide}>
          <Text style={styles.text}>Welcome to our application!</Text>
        </View>
        <View style={[styles.slide, { backgroundColor: colors.primary }]}>
          <Text style={styles.text}>
            Find the best hotels and rooms for your stay
          </Text>
        </View>
        <View style={[styles.slide, { backgroundColor: colors.primaryLight }]}>
          <Text style={styles.text}>
            We want you to have a great experience
          </Text>
        </View>
        <View style={[styles.slide, { backgroundColor: 'lightblue' }]}>
          <Text style={styles.text}>Enjoy your application</Text>
        </View>
        <View style={[styles.slide, { backgroundColor: colors.primaryDark }]}>
          <Text style={styles.text}>Cheers!</Text>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    margin: 20,
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
});
