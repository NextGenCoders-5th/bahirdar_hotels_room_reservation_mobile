import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import colors from '@/config/colors';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
};

function AppButton({
  label,
  onPress,
  buttonStyle,
  labelStyle,
}: AppButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryDark,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    // textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
