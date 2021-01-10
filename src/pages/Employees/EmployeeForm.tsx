import React, { useCallback } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { useFormik } from 'formik';

// import { useForm, Form } from '../../components/useForm';
import Input from '../../components/controls/Input';
import Radio from '../../components/controls/Radio';
// import Select from '../../components/controls/Select';
// import Checkbox from '../../components/controls/Checkbox';
// import DatePicker from '../../components/controls/DatePicker';
import Button from '../../components/controls/Button';
import * as Yup from 'yup';
// import * as employeeService from '../../services/employeeService';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const initialValues: FormValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const employeeSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

interface FormValues {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: 'male' | 'female' | 'other';
  departmentId: string;
  hireDate: Date;
  isPermanent: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiFormControl-root, & .MuiButton-root': {
      margin: theme.spacing(1),
    },
  },
}));

const EmployeeForm: React.FC = () => {
  const classes = useStyles();

  const handleEmployeeSubmit = useCallback(() => {
    console.log('submitted! ');
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: employeeSchema,
    onSubmit: handleEmployeeSubmit,
  });

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            label="Full Name"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && !!formik.errors.fullName}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <Input
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Input
            label="Mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && !!formik.errors.mobile}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
          <Input
            label="City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && !!formik.errors.city}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item container xs={6}>
          <Radio
            label="Gender"
            name="gender"
            value={formik.values.gender}
            items={genderItems}
            onChange={formik.handleChange}
            error={formik.touched.gender && !!formik.errors.gender}
            helperText={formik.touched.gender && formik.errors.gender}
          />
          {/* 
          <Select
            label="Department"
            name="departmentId"
            value={values.departmentId}
            options={employeeService.getDepartmentCollection()}
            onChange={handleInputChange}
          />
          <DatePicker
            label="Hire Date"
            name="hireDate"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Checkbox
            label="Permanent Employee"
            name="isPermanent"
            value={values.isPermanent}
            onChange={handleInputChange}
          /> */}
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
                onClick={formik.handleReset}
                text="Reset"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
