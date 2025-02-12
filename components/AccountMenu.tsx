import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '@/config/colors';
import ImageButton from '@/components/ImageButton';
import IconButton from '@/components/IconButton';

const AccountMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <View
      style={{
        width: '100%',
        position: 'relative',
        padding: 5,
        backgroundColor: colors.primaryLight,
        height: 60,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <ImageButton
        onPress={toggleMenu}
        imageUrl={require('@/assets/images/profile/profile-1.jpg')}
        imageStyle={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
      />

      {menuVisible && (
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 60,
            borderColor: colors.greyLight,
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <IconButton
            icon='account'
            color={colors.primaryDark}
            label='Profile'
            onPress={() => {}}
            buttonStyle={{
              padding: 5,
              justifyContent: 'flex-start',
              borderBottomWidth: 2,
              borderBottomColor: colors.primaryLight,
              borderRadius: 0,
              backgroundColor: 'transparent',
              width: 150,
              marginVertical: 0,
            }}
            labelStyle={{ color: colors.primaryDark }}
          />
          <IconButton
            icon='heart'
            color={colors.primaryDark}
            label='Favorites'
            onPress={() => {}}
            buttonStyle={{
              padding: 5,
              justifyContent: 'flex-start',
              borderBottomWidth: 2,
              borderBottomColor: colors.primaryLight,
              borderRadius: 0,
              backgroundColor: 'transparent',
              width: 150,
              marginVertical: 0,
            }}
            labelStyle={{ color: colors.primaryDark }}
          />
          <IconButton
            icon='calendar'
            color={colors.primaryDark}
            label='Bookings'
            onPress={() => {}}
            buttonStyle={{
              padding: 5,
              justifyContent: 'flex-start',
              borderBottomWidth: 2,
              borderBottomColor: colors.primaryLight,
              borderRadius: 0,
              backgroundColor: 'transparent',
              width: 150,
              marginVertical: 0,
            }}
            labelStyle={{ color: colors.primaryDark }}
          />
        </View>
      )}
    </View>
  );
};

export default AccountMenu;

const styles = StyleSheet.create({
  container: {},
  profileImage: {},
  menu: {},
  menuItem: {},
  menuText: {},
});
