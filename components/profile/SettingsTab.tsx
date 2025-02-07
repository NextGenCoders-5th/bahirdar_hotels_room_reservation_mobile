import { View, Text } from 'react-native';
import React from 'react';
import IconButton from '../IconButton';
import colors from '@/config/colors';
import { router } from 'expo-router';
import { routes } from '@/routes';

export default function SettingsTab() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <IconButton
        buttonStyle={{
          borderRadius: 5,
          paddingVertical: 10,
          borderColor: colors.primaryDark,
          padding: 2,
          marginVertical: 0,
          width: 150,
          backgroundColor: 'transparent',
        }}
        label='update your profile'
        icon='pencil'
        size={18}
        labelStyle={{
          marginLeft: 4,
          fontSize: 16,
          color: colors.primaryDark,
          textDecorationLine: 'underline',
          textTransform: 'capitalize',
          margin: 0,
        }}
        color={colors.primaryDark}
        onPress={() => {
          router.push(routes.UPDATE_PROFILE);
        }}
      />
    </View>
  );
}
