import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function LoadingError({
  message = 'Error loading',
}: {
  message?: string;
}) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{message} 😞</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
