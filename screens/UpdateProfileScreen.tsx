import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppTextInput from '@/components/AppTextInput';
import AppButton from '@/components/AppButton';

export default function UpdateProfileScreen() {
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
          <TouchableOpacity
            style={{
              left: '30%',
              position: 'absolute',
              top: 90,
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                padding: 5,
                width: 100,
                textAlign: 'center',
                color: colors.greyDark,
                fontSize: 14,
                textDecorationLine: 'underline',
              }}
            >
              Update photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          // marginTop: 80,
          padding: 20,
        }}
      >
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>First Name</AppText>
          <AppTextInput placeholder='First name' />
        </View>
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>Last Name</AppText>
          <AppTextInput placeholder='Last name' />
        </View>
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>Email</AppText>
          <AppTextInput placeholder='Email' />
        </View>
        <View>
          <AppText style={styles.inputLabel}>Phone number</AppText>
          <AppTextInput placeholder='Phone number' secureTextEntry />
        </View>
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>Password</AppText>
          <AppTextInput placeholder='Password' secureTextEntry />
        </View>

        <AppButton
          label='Update'
          onPress={() => {}}
          buttonStyle={{
            width: 150,
            borderRadius: 10,
            padding: 10,
            alignSelf: 'flex-end',
          }}
        />
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
  inputLabel: { marginBottom: 0, fontWeight: '600' },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    width: 150,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
});
