import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";

const Select = (props) => {
  const { name, label, value, onChange, options, ...others } = props;

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
      <MuiSelect
        labelId={`${name}-select-label`}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...others}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
