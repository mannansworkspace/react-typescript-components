import React from 'react';

import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import type { AutocompleteProps } from '@mui/material';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import Styles from './styles';

export interface Option<T = string | number, K = object> {
  value: T;
  label: string;
  original?: K;
}

interface IProps extends Omit<AutocompleteProps<Option | string | number, boolean, false, false>, 'renderInput'> {
  name: string;
  label?: string;
  defaultValue?: Option[] | Option | string;
  multiple?: boolean; // Determine whether to handle multi-select
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  styles?: boolean;
}

const Autocomplete = ({
  name,
  label,
  control,
  options,
  multiple = false,
  defaultValue,
  onChange,
  styles = true,
  ...rest
}: IProps) => {
  // Set the default value based on the multiple prop
  defaultValue = defaultValue ?? (multiple ? [] : '');

  const {
    field,
    fieldState: { isTouched, invalid, error },
  } = useController({ name, control, defaultValue });

  return (
    <MuiAutocomplete
      {...field}
      multiple={multiple} // Pass the multiple prop to enable multi-select if true
      value={field.value ?? (multiple ? [] : '')}
      // value={field?.value?.label ?? field?.value}
      onChange={(e, value, reason) => {
        if (!value) value = defaultValue;
        onChange?.(e, value, reason);
        field.onChange(value);
      }}
      sx={styles ? Styles.textField : undefined} //conditional styles added
      fullWidth
      id={name}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          error={!!((isTouched || invalid) && error?.message)}
          helperText={(isTouched || invalid) && error?.message}
        />
      )}
      options={options}
      disableCloseOnSelect={multiple} // Disable closing the dropdown if multiple is true
      {...rest}
    />
  );
};

export default Autocomplete;
