import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';
import colors from '@/config/colors';
import { TextStyle, ViewStyle } from 'react-native';

interface SubmitButtonProps {
  label: string;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

function SubmitButton({ label, buttonStyle, labelStyle }: SubmitButtonProps) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      label={label}
      onPress={handleSubmit}
      buttonStyle={buttonStyle}
      labelStyle={labelStyle}
    />
  );
}

export default SubmitButton;
