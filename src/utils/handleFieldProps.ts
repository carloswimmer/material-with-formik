import { FormikProps } from 'formik';

export default function handleFieldProps(formik: FormikProps<any>, id: string) {
  const { getFieldProps, getFieldMeta } = formik;

  const errorMessage = getFieldMeta(id).touched && getFieldMeta(id).error;

  return {
    error: !!errorMessage,
    helperText: errorMessage,
    ...getFieldProps(id),
  };
}
