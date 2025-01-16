import { View, Text, StyleSheet, TextStyle } from 'react-native';
import React from 'react';
import colors from '@/config/colors';

type AppTextProps = {
  children: React.ReactNode;
  style?: TextStyle;
};

export default function AppText({ children, style }: AppTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.greyDark,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
