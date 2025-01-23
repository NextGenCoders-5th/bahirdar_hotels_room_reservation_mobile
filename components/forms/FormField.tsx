import type React from 'react';
import { useFormikContext, type FormikValues } from 'formik';
import { TextInput, View } from 'react-native';

import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';

interface FormFieldProps extends React.ComponentProps<typeof TextInput> {
  name: string;
  width?: number | string;
}

function FormField<T extends FormikValues>({
  name,
  width,
  ...otherProps
}: FormFieldProps) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<T>();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name] as string}
        width={width}
        {...otherProps}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
}

export default FormField;
