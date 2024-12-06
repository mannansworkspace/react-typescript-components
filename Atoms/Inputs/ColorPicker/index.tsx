import React from 'react';

import { MuiColorInput } from 'mui-color-input';
import type { MuiColorInputProps } from 'mui-color-input';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface IProps extends Omit<MuiColorInputProps, 'value'> {
  name: string;
  label: string;
  defaultValue?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const ColorPicker = ({
  name,
  label,
  sx = { width: '100%' },
  format = 'hex',
  defaultValue = '#fff',
  onChange,
  control,
  ...rest
}: IProps) => {
  const {
    field,
    fieldState: { isTouched, invalid, error },
  } = useController({ name, control, defaultValue });

  return (
    <MuiColorInput
      {...field}
      value={field.value || defaultValue}
      name={name}
      onChange={(value, colors) => {
        onChange?.(value, colors);
        field.onChange(value, colors);
      }}
      label={label}
      format={format}
      sx={sx}
      error={!!((isTouched || invalid) && error?.message)}
      helperText={(isTouched || invalid) && error?.message}
      {...rest}
    />
  );
};

export default ColorPicker;
