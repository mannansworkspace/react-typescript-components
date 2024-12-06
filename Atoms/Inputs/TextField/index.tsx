import React from 'react';

import MuiTextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import styles from './styles';

interface IProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  label?: string;
  defaultValue?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const TextField = ({ name, defaultValue = '', control, ...rest }: IProps) => {
  const {
    field,
    fieldState: { isTouched, invalid, error },
  } = useController({ name, control, defaultValue });

  return (
    <MuiTextField
      {...field}
      sx={styles.textField}
      margin="normal"
      fullWidth
      id={name}
      name={name}
      error={!!((isTouched || invalid) && error?.message)}
      helperText={(isTouched || invalid) && error?.message}
      {...rest}
    />
  );
};

export default TextField;
