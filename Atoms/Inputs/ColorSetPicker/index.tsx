import React, { useState } from 'react';

import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { UseFormSetValue } from 'react-hook-form';

import ColorPalette from '../ColorPalette';

import styles from './styles';

interface IProps {
  name: string;
  label: string;
  colorSets: string[][];
  selectedColorSet: number;
  setSelectedColorSet: React.Dispatch<React.SetStateAction<number>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
}

const ColorSetPicker = ({ name, label, setValue, colorSets, selectedColorSet, setSelectedColorSet }: IProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleColorChange = (event: SelectChangeEvent<number>) => {
    const selectedIndex = event.target.value as number;
    setValue(name, colorSets[selectedIndex]);
    setSelectedColorSet(selectedIndex);
    setOpen(!isOpen);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select Color</InputLabel>
      <Select
        label={label}
        value={selectedColorSet}
        onChange={handleColorChange}
        open={isOpen} // Toggle the Select based on the state
        onClose={() => setOpen(false)} // Close the Select when user clicks outside
        onOpen={() => setOpen(true)}
        MenuProps={{
          sx: styles.menu,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
        }}
        sx={styles.select}
      >
        {colorSets.map((colors, i) => (
          <MenuItem key={`${i}_${colors.length}`} value={i}>
            <ColorPalette colors={colors} key={i} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColorSetPicker;
