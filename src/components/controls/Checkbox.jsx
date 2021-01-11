import React, { useCallback } from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormHelperText,
} from '@material-ui/core';

const Checkbox = (props) => {
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

  const convertValueToChecked = useCallback((name, value) => {
    const convertedEvent = {
      target: { name, value },
    };

    return convertedEvent;
  }, []);

  return (
    <FormControl error={error}>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertValueToChecked(name, e.target.checked))
            }
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
