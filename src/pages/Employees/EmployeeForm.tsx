import React, { useCallback } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { Formik } from 'formik';

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

  const handleEmployeeSubmit = useCallback((formValues) => {
    console.log('submitted! ', formValues);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={employeeSchema}
      onSubmit={(values) => handleEmployeeSubmit(values)}
    >
      {({ getFieldProps, handleSubmit, handleReset, touched, errors }) => (
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Input
                label="Full Name"
                id="fullName"
                {...getFieldProps('fullName')}
                error={touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
              />
              <Input
                label="Email"
                id="email"
                {...getFieldProps('email')}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Input
                label="Mobile"
                id="mobile"
                {...getFieldProps('mobile')}
                error={touched.mobile && !!errors.mobile}
                helperText={touched.mobile && errors.mobile}
              />
              <Input
                label="City"
                id="city"
                {...getFieldProps('city')}
                error={touched.city && !!errors.city}
                helperText={touched.city && errors.city}
              />
            </Grid>
            <Grid item container xs={6} alignContent="flex-start">
              <Radio
                label="Gender"
                id="gender"
                {...getFieldProps('gender')}
                items={genderItems}
                error={touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
              />
              <Select
                label="Department"
                id="departmentId"
                {...getFieldProps('departmentId')}
                options={employeeService.getDepartmentCollection()}
                error={touched.departmentId && !!errors.departmentId}
                helperText={touched.departmentId && errors.departmentId}
              />
              <DatePicker
                label="Hire Date"
                id="hireDate"
                {...getFieldProps('hireDate')}
                helperText="Choose date from the past"
              />
              <Checkbox
                label="I hereby declare that all information provided is true."
                id="confirmInfo"
                {...getFieldProps('confirmInfo')}
                error={touched.confirmInfo && !!errors.confirmInfo}
                helperText={touched.confirmInfo && errors.confirmInfo}
              />
              <Grid item container justify="flex-end">
                <Grid item>
                  <Button
                    type="submit"
                    size="large"
                    color="secondary"
                    text="Submit"
                  />
                </Grid>
                <Grid item>
                  <Button
                    size="large"
                    color="default"
                    onClick={handleReset}
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
