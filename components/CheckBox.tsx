import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/config/colors';

interface CheckBoxProps {
  isChecked: boolean;
  description: string;
  onToggle: () => void;
  boxStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked,
  description,
  onToggle,
  textStyle,
  boxStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, boxStyle]}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.checkbox,
          { backgroundColor: isChecked ? colors.primaryDark : colors.white },
        ]}
      >
        {isChecked && (
          <Ionicons name='checkmark' size={20} color={colors.white} />
        )}
      </View>
      <Text style={[styles.description, textStyle]}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    color: colors.greyDark,
  },
});

export default CheckBox;
