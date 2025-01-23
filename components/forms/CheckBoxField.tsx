import React from 'react';
import { View, TextStyle, ViewStyle } from 'react-native';
import { useFormikContext } from 'formik';

import CheckBox from '@/components/CheckBox';
import ErrorMessage from './ErrorMessage';

interface CheckBoxFieldProps {
  name: string;
  description: string;
  boxStyle?: ViewStyle;
  descriptionStyle?: TextStyle;
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  name,
  description,
  boxStyle,
  descriptionStyle,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();

  const isChecked = values[name];

  const handleToggle = () => {
    setFieldValue(name, !isChecked);
  };

  return (
    <View>
      <CheckBox
        isChecked={isChecked}
        description={description}
        onToggle={handleToggle}
        boxStyle={boxStyle}
        descriptionStyle={descriptionStyle}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </View>
  );
};

export default CheckBoxField;
