import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import { router, useRouter } from 'expo-router';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppButton from '@/components/AppButton';
import { routes } from '@/routes';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 24,
            color: colors.white,
          }}
        >
          Welcome, Henok 👋
        </Text>

        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            bottom: -50,
            left: '38%',
          }}
        >
          <Image
            source={require('@/assets/images/profile/profile-1.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: colors.white,
            }}
          />
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 10, zIndex: 2 }}>
          <AppButton
            buttonStyle={{
              backgroundColor: 'transparent',
              borderRadius: 5,
              top: 90,
              padding: 2,
            }}
            label='Update profile'
            labelStyle={{
              color: colors.primaryDark,
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              router.push(routes.UPDATE_PROFILE);
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Full name</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            Henok Alemu
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Email</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            henokalemu@test.com
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Username</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            henok
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Phone number</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            0961234567
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Date of birth</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            01/01/1990
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Gender</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            Male
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <AppText style={{ fontWeight: '500' }}>Address</AppText>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: colors.primaryExtraLight2,
              padding: 10,
              borderRadius: 5,
              color: colors.greyMediumDark,
            }}
          >
            Bahir Dar, Ethiopia - Kebele 10
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  header: {
    position: 'relative',
    height: 200,
    width: '100%',
    backgroundColor: colors.primary,
    padding: 20,
    marginBottom: 70,
  },
  marginBottom: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    width: 150,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
});
