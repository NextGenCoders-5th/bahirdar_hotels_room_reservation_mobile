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
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '@/redux/slices/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useRouter } from 'expo-router';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import AppTextInput from '@/components/AppTextInput';

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
            left: '40%',
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
            }}
          >
            <Text
              style={{
                padding: 5,
                width: 80,
                textAlign: 'center',
                color: colors.greyDark,
                fontSize: 14,
                textDecorationLine: 'underline',
              }}
            >
              Edit photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          top: 100,
          padding: 20,
        }}
      >
        <View style={styles.inputContainer}>
          <AppText style={styles.inputLabel}>First Name</AppText>
          <AppTextInput placeholder='First name' />
        </View>
        <View style={styles.inputContainer}>
          <AppText style={styles.inputLabel}>Last Name</AppText>
          <AppTextInput placeholder='First name' />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    position: 'relative',
    height: 200,
    width: '100%',
    backgroundColor: colors.primary,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: { marginBottom: 0, fontWeight: '600' },
});
