import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const LoadingIndicator: React.FC<{ message?: string }> = ({
  message = 'Loading...',
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#4F46E5' />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: '500',
  },
});

export default LoadingIndicator;
