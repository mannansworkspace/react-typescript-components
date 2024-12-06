import React from 'react';

import { Grid, Paper } from '@mui/material';

interface IProps {
  colors: string[];
  width?: number;
  height?: number;
}

const ColorPalette = ({ colors, height = 16 }: IProps) => {
  // const handleClick = (color: string) => {
  //   console.log('Clicked on color:', color);
  // };

  return (
    <Grid container className="colorPalette">
      {colors.map((color, index) => (
        <Grid item key={`${index}_${color}`} xs={12 / colors.length}>
          <Paper
            sx={{
              height,
              margin: 0,
              // cursor: 'pointer',
              borderRadius: 0,
            }}
            style={{ backgroundColor: color }}
            // onClick={() => handleClick(color)}
            elevation={3}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ColorPalette;
