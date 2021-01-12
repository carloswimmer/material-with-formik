import React, { useCallback } from 'react';
import {
  Backdrop,
  CircularProgress,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { Formik, FormikHelpers, FormikProps } from 'formik';

import Input from '../../components/controls/Input';
import Radio from '../../components/controls/Radio';
import Select from '../../components/controls/Select';
import Checkbox from '../../components/controls/Checkbox';
import DatePicker from '../../components/controls/DatePicker';
import Button from '../../components/controls/Button';
import * as Yup from 'yup';
import * as employeeService from '../../services/employeeService';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
  { id: 'none', title: 'None' },
];

const initialValues: FormValuesProps = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  confirmInfo: false,
};

const employeeSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  gender: Yup.string().oneOf(
    ['male', 'female', 'other'],
    'Choose "Other" in this case',
  ),
  departmentId: Yup.string().required('Required'),
  confirmInfo: Yup.boolean().isTrue('You need to confirm to submit'),
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiFormControl-root, & .MuiButton-root': {
      margin: theme.spacing(1),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

interface FormValuesProps {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: 'male' | 'female' | 'other';
  departmentId: string;
  hireDate: Date;
  confirmInfo: boolean;
}

const EmployeeForm: React.FC = () => {
  const classes = useStyles();

  const handleEmployeeSubmit = useCallback(
    (formValues: FormValuesProps, actions: FormikHelpers<FormValuesProps>) => {
      setTimeout(() => {
        console.log('submitted! ', formValues);
        actions.setSubmitting(false);
      }, 3000);
    },
    [],
  );

  const handleFieldProps = (
    formik: FormikProps<FormValuesProps>,
    id: string,
  ) => {
    const { getFieldProps, getFieldMeta } = formik;

    const errorMessage = getFieldMeta(id).touched && getFieldMeta(id).error;

    return {
      error: !!errorMessage,
      helperText: errorMessage,
      ...getFieldProps(id),
    };
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={employeeSchema}
      onSubmit={(values, actions) => handleEmployeeSubmit(values, actions)}
    >
      {(formik) => (
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Input
                label="Full Name"
                id="fullName"
                {...handleFieldProps(formik, 'fullName')}
              />
              <Input
                label="Email"
                id="email"
                {...handleFieldProps(formik, 'email')}
              />
              <Input
                label="Mobile"
                id="mobile"
                {...handleFieldProps(formik, 'mobile')}
              />
              <Input
                label="City"
                id="city"
                {...handleFieldProps(formik, 'city')}
              />
            </Grid>
            <Grid item container xs={6} alignContent="flex-start">
              <Radio
                label="Gender"
                id="gender"
                items={genderItems}
                {...handleFieldProps(formik, 'gender')}
              />
              <Select
                label="Department"
                id="departmentId"
                options={employeeService.getDepartmentCollection()}
                {...handleFieldProps(formik, 'departmentId')}
              />
              <DatePicker
                label="Hire Date"
                id="hireDate"
                {...handleFieldProps(formik, 'hireDate')}
                helperText="Choose date from the past"
              />
              <Checkbox
                label="I hereby declare that all information provided is true."
                id="confirmInfo"
                {...handleFieldProps(formik, 'confirmInfo')}
              />
              <Grid item container justify="flex-end">
                <Grid item>
                  <Button
                    type="submit"
                    size="large"
                    color="secondary"
                    text="Submit"
                    disabled={formik.isSubmitting}
                  />
                </Grid>
                {formik.isSubmitting && (
                  <Backdrop className={classes.backdrop} open>
                    <CircularProgress color="secondary" />
                  </Backdrop>
                )}
                <Grid item>
                  <Button
                    size="large"
                    color="default"
                    onClick={formik.handleReset}
                    text="Reset"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default EmployeeForm;
