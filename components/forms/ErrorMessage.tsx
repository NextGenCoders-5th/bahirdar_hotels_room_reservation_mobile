import React from 'react';
import { StyleSheet, Text } from 'react-native';

type ErrorMessageProps = {
  error: string;
  visible: boolean;
};

export default function ErrorMessage({ error, visible }: ErrorMessageProps) {
  if (!visible || !error) return null;

  return <Text style={{ color: 'red' }}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: 'red' },
});
