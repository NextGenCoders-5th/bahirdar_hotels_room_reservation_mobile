import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '@/redux/slices/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleSignIn = async () => {
    try {
      await dispatch(signIn({ email, password })).unwrap();
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Sign In' onPress={handleSignIn} disabled={isLoading} />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => router.push('/(auth)/signup')}
      />
      <Button
        title='Forgot Password?'
        onPress={() => router.push('/(auth)/forget-password')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
