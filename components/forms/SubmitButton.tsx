import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';
import colors from '@/config/colors';

function SubmitButton({ label }: { label: string }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      label={label}
      onPress={handleSubmit}
      buttonStyle={{ marginBottom: 15, backgroundColor: colors.yellow }}
      labelStyle={{
        color: colors.greyDark,
      }}
    />
  );
}

export default SubmitButton;
