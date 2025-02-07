import { Image, StyleSheet, View } from 'react-native';
import AppText from '../AppText';
import colors from '@/config/colors';
import AppButton from '../AppButton';

export default function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('@/assets/images/profile/profile-1.jpg')}
        style={styles.profileImage}
      />
      <View style={{ flex: 1, top: 8 }}>
        <AppText style={styles.profileName}>Abrham Yihenew</AppText>
        <AppText style={styles.profileEmail}>abrham@test.com</AppText>
      </View>

      <AppButton
        label='Logout'
        onPress={() => {}}
        labelStyle={{
          fontSize: 14,
          color: colors.red,
        }}
        buttonStyle={{
          width: 80,

          borderRadius: 5,
          borderWidth: 1,
          borderColor: colors.primaryDark,
          marginVertical: 0,
          opacity: 0.7,
          padding: 5,
          top: -10,
          right: -5,
          backgroundColor: 'transparent',
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
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: colors.greyDark,
    fontWeight: '400',
    top: -10,
  },
});
