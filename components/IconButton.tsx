import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  Image,
  ImageStyle,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '@/config/colors';

interface IconButtonProps {
  icon:
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof Ionicons.glyphMap
    | ImageSourcePropType;
  onPress: () => void;
  label?: string;
  buttonStyle?: ViewStyle;
  iconStyle?: TextStyle | ImageStyle;
  labelStyle?: TextStyle;
  color?: string;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  label,
  buttonStyle,
  iconStyle,
  labelStyle,
  color = colors.primaryLight,
  size = 24,
}) => {
  const isImage = typeof icon === 'object';
  const IconLibrary =
    typeof icon === 'string' && icon in MaterialCommunityIcons.glyphMap
      ? MaterialCommunityIcons
      : Ionicons;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        {
          width: isImage ? 40 : 24,
          height: isImage ? 40 : 24,
          borderRadius: isImage ? 40 : 12,
          padding: isImage ? 0 : 15,
        },
      ]}
      onPress={onPress}
    >
      {isImage ? (
        <Image
          source={icon}
          style={[styles.image, iconStyle && (iconStyle as any)]}
        />
      ) : (
        <IconLibrary
          name={icon as any}
          size={size}
          color={color}
          style={iconStyle && (iconStyle as any)}
        />
      )}

      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
    backgroundColor: colors.primaryDark,
    // borderRadius: 20,
    marginVertical: 10,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.primaryExtraLight,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    resizeMode: 'contain',
  },
});

export default IconButton;
