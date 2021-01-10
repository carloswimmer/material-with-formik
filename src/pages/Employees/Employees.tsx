import React from 'react';
import EmployeeForm from './EmployeeForm';
import AppBar from '../../components/AppBar';
import { Paper, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employees;
