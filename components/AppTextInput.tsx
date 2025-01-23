import React, { ComponentProps } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '@/config/colors';

export type IconProps =
  | ComponentProps<typeof Ionicons>
  | ComponentProps<typeof MaterialCommunityIcons>;

interface AppTextInputProps extends TextInputProps {
  icon?: IconProps['name'];
  width?: string | number;
  iconColor?: string;
}

function AppTextInput({
  icon,
  width = '100%',
  iconColor = colors.grey,
  ...otherProps
}: AppTextInputProps) {
  const isMaterialCommunityIcon =
    icon && icon in MaterialCommunityIcons.glyphMap;
  const IconLibrary = isMaterialCommunityIcon
    ? MaterialCommunityIcons
    : Ionicons;

  return (
    <View style={[styles.container, { width } as ViewStyle]}>
      {icon && (
        <IconLibrary
          name={icon as any}
          size={20}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.greyLight}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  icon: {
    marginRight: 10,
    top: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default AppTextInput;
