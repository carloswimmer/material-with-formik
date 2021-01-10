import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio as MuiRadio,
  FormHelperText,
} from '@material-ui/core';

const Radio = (props) => {
  const {
    name,
    label,
    value,
    onChange,
    items,
    error,
    helperText,
    ...others
  } = props;

  return (
    <FormControl component="fieldset" error={error}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
        {...others}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<MuiRadio color="primary" />}
            label={item.title}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Radio;
