import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const DatePicker = (props: KeyboardDatePickerProps) => {
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
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          label={label}
          name={name}
          inputVariant="outlined"
          fullWidth
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          maxDate={new Date()}
          helperText={error && helperText}
          {...others}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePicker;
