import React from 'react';
import { TextField } from '@material-ui/core';

const Input = (props) => {
  const {
    name,
    label,
    value,
    onChange,
    onBlur,
    error,
    helperText,
    ...others
  } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      {...others}
    />
  );
};

export default Input;