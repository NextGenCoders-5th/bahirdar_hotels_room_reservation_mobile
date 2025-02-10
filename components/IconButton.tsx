import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '@/config/colors';

interface IconButtonProps {
  icon:
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof Ionicons.glyphMap;
  iconDirection?: 'left' | 'right';
  onPress: () => void;
  label?: string;
  buttonStyle?: ViewStyle;
  iconStyle?: TextStyle;
  labelStyle?: TextStyle;
  color?: string;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconDirection = 'left',
  onPress,
  label,
  buttonStyle,
  iconStyle,
  labelStyle,
  color = colors.primaryLight,
  size = 24,
}) => {
  const isMaterialCommunityIcon = icon in MaterialCommunityIcons.glyphMap;
  const IconLibrary = isMaterialCommunityIcon
    ? MaterialCommunityIcons
    : Ionicons;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      {iconDirection === 'left' && (
        <IconLibrary
          name={icon as any}
          size={size}
          color={color}
          style={iconStyle}
        />
      )}

      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {iconDirection === 'right' && (
        <IconLibrary
          name={icon as any}
          size={size}
          color={color}
          style={iconStyle}
        />
      )}
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
    borderRadius: 20,
    marginVertical: 10,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.primaryExtraLight,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default IconButton;
