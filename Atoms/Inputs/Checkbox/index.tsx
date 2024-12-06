import React from 'react';

import { Checkbox as MuiCheckbox, FormControlLabel, type TypographyProps, type SxProps } from '@mui/material';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface IProps extends CheckboxProps {
  name: string;
  title?: string;
  label: string;
  sxFormControl?: SxProps;
  typographyProps?: TypographyProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const Checkbox = ({ name, label, sxFormControl, typographyProps, control, ...rest }: IProps) => {
  const { field } = useController({ name, control });

  return (
    <FormControlLabel
      control={<MuiCheckbox {...field} defaultChecked={field.value} color="error" {...rest} />}
      label={label}
      slotProps={{
        typography: typographyProps,
      }}
      sx={sxFormControl}
    />
  );
};

export default Checkbox;
