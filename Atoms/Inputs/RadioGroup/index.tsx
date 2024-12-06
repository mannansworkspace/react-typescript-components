import React from 'react';

import { RadioGroup as MuiRadioGroup, FormControlLabel, FormControl, FormLabel, Radio } from '@mui/material';
import type { FormControlProps } from '@mui/material/FormControl';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface IProps extends RadioGroupProps {
  name: string;
  label: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  formControlProps?: FormControlProps;
  options: { label: string; value: string }[];
}

const RadioGroup = ({ name, label, control, options, ...rest }: IProps) => {
  const { field } = useController({ name, control });

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <MuiRadioGroup {...field} row aria-label={name} name={name} {...rest}>
        {options.map((option, index) => (
          <FormControlLabel
            key={`${index}_${option.value}`}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
