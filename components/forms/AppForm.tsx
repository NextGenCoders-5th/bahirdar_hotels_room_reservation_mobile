import React, { type ReactNode } from 'react';
import { Formik, type FormikHelpers, type FormikValues } from 'formik';
import type * as Yup from 'yup';

interface AppFormProps<T extends FormikValues> {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
  validationSchema: Yup.Schema<T>;
  children: ReactNode;
}

function AppForm<T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps<T>) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
