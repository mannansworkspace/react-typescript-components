import React, { useMemo } from 'react';

import { type ChipOwnProps, getLuminance, Chip as MuiChip } from '@mui/material';
import rgb from 'rgb';

interface IProps extends ChipOwnProps {
  colorLabel?: string;
}

// Function to determine if text color should be black or white
const getTextColor = (backgroundColor?: string) => {
  if (!backgroundColor || !rgb(backgroundColor)) return;

  const luminance = getLuminance(backgroundColor);

  return luminance > 0.5 ? 'black' : 'white'; // Higher luminance -> black text, lower luminance -> white text
};

const Chip = ({ label, colorLabel, sx, ...rest }: IProps) => {
  const textColor = useMemo(() => getTextColor(colorLabel), [colorLabel]);

  return (
    <MuiChip
      label={colorLabel || label || 'N/A'}
      sx={{
        minWidth: '32px',
        ...sx,
        ...(colorLabel && { backgroundColor: colorLabel, color: textColor }),
      }}
      {...rest}
    />
  );
};

export default Chip;
