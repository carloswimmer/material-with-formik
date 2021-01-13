import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormHelperText,
  CheckboxProps,
} from '@material-ui/core';

interface MuiCheckboxProps extends CheckboxProps {
  label: string;
  error?: boolean;
  helperText?: string | false;
  value: boolean;
  name: string;
}

const Checkbox = (props: MuiCheckboxProps) => {
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
    <FormControl error={error}>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="secondary"
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            {...others}
          />
        }
        label={label}
      />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Checkbox;
