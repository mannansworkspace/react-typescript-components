import React, { useMemo } from 'react';

import { type AutocompleteProps } from '@mui/material';
import { type Control } from 'react-hook-form';

import { Autocomplete, Option } from 'components/Common/Atoms/Inputs';

import { authController } from 'store/authController';

interface IProps
  extends Omit<AutocompleteProps<Option | string | number, boolean, false, false>, 'renderInput' | 'options'> {
  name?: string;
  label?: string;
  defaultValue?: Option[] | Option | string;
  multiple?: boolean; // Determine whether to handle multi-select
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const BusinessUnitAutocomplete = ({ control, ...rest }: IProps) => {
  const {
    authState: { user },
  } = authController.useState(['user']);

  const options = useMemo(
    () =>
      user?.businessUnits.map(bu => ({
        value: bu.id,
        label: bu.name,
        original: bu,
      })) || [],
    [user?.businessUnits],
  );

  if (!user) return null;

  return <Autocomplete name="businessUnit" label="Business Unit" options={options} control={control} {...rest} />;
};

export default BusinessUnitAutocomplete;
