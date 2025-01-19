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
      <IconLibrary
        name={icon as any}
        size={size}
        color={color}
        style={iconStyle}
      />
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.primaryDark,
    borderRadius: 20,
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
