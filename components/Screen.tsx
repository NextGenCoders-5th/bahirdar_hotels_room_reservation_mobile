import React, { ReactNode } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View, ViewStyle } from 'react-native';

interface ScreenProps {
  children: ReactNode;
  style?: ViewStyle;
}

function Screen({ children, style }: ScreenProps) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* <View style={[styles.view, style]}>{children}</View> */}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
