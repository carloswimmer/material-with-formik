import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

const Input = (props: TextFieldProps) => {
  const {
    name,
    label,
    value,
    onChange,
    onBlur,
    error,
    helperText,
    InputProps,
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
      InputProps={InputProps}
      {...others}
    />
  );
};

export default Input;
