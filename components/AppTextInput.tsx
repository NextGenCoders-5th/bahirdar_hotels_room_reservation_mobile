import React, { ComponentProps } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/config/colors';

type IoniconsProps = ComponentProps<typeof Ionicons>;

interface AppTextInputProps extends TextInputProps {
  icon?: IoniconsProps['name'];
  width?: string | number;
}

function AppTextInput({
  icon,
  width = '100%',
  ...otherProps
}: AppTextInputProps) {
  return (
    <View style={[styles.container, { width } as ViewStyle]}>
      {icon && (
        <Ionicons
          name='person'
          size={20}
          color={colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.greyLight}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  icon: {
    marginRight: 10,
    top: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default AppTextInput;
