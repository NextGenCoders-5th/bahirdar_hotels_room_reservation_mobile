import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '@/redux/slices/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useRouter } from 'expo-router';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppTextInput from '@/components/AppTextInput';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  // const dispatch = useDispatch<AppDispatch>();
  // const router = useRouter();
  // const { user } = useSelector((state: RootState) => state.auth);

  // const handleSignOut = async () => {
  //   await dispatch(signOut());
  //   router.replace('/(auth)/signin');
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
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
          marginTop: 100,
          padding: 20,
        }}
      >
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>First Name</AppText>
          <AppTextInput placeholder='First name' />
        </View>
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>Last Name</AppText>
          <AppTextInput placeholder='First name' />
        </View>
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>Email</AppText>
          <AppTextInput placeholder='Email' />
        </View>
        <View style={styles.marginBottom}>
          <AppText style={styles.inputLabel}>Password</AppText>
          <AppTextInput placeholder='Password' secureTextEntry />
        </View>
        <View>
          <AppText style={styles.inputLabel}>Phone number</AppText>
          <AppTextInput placeholder='First name' secureTextEntry />
        </View>
        <TouchableHighlight style={styles.button}>
          <Text
            style={{ color: colors.white, textAlign: 'center', fontSize: 16 }}
          >
            Update
          </Text>
        </TouchableHighlight>
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
