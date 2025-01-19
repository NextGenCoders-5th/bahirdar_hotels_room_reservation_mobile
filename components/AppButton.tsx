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
  title: string;
  onPress: () => void;
  boxStyle?: ViewStyle;
  textStyle?: TextStyle;
};

function AppButton({ title, onPress, boxStyle, textStyle }: AppButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, boxStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
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
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
