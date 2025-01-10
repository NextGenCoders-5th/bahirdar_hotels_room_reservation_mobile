import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '@/src/screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignIn' component={SignInScreen} />
      {/* <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
