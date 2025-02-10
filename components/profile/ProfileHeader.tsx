import { Image, StyleSheet, View } from 'react-native';
import AppText from '../AppText';
import colors from '@/config/colors';
import AppButton from '../AppButton';
import { useAuth } from '@/hooks/authContext';
import { useGetCurrentUserQuery } from '@/redux/userApi';
import { useLogoutMutation } from '@/redux/authApi';

export default function ProfileHeader() {
  // const { user, logout } = useAuth();

  const { data } = useGetCurrentUserQuery();
  const { username, email, profilePicture } = data?.data || {};

  const [logout] = useLogoutMutation();

  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: profilePicture }} style={styles.profileImage} />
      <View style={{ flex: 1, top: 8 }}>
        <AppText style={styles.profileName}>{username}</AppText>
        <AppText style={styles.profileEmail}>{email}</AppText>
      </View>

      <AppButton
        label='Logout'
        onPress={logout}
        labelStyle={{
          fontSize: 14,
          color: colors.red,
        }}
        buttonStyle={{
          width: 'auto',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: colors.red,
          marginVertical: 0,
          opacity: 0.8,
          padding: 5,
          top: -10,
          right: -5,
          backgroundColor: colors.white,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    paddingVertical: 15,
    backgroundColor: colors.primaryDark,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primaryLight,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.primaryLight,
    fontWeight: 'thin',
    top: -10,
  },
});
