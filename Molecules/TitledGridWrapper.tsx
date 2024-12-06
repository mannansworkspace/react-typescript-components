import React from 'react';

import { Grid, type GridOwnProps, Typography, type TypographyOwnProps } from '@mui/material';

interface IProps {
  title: string;
  children: React.ReactNode;
  contained?: boolean;
  TitleGridProps?: GridOwnProps;
  TypographyProps?: TypographyOwnProps;
  GridProps?: GridOwnProps;
}

const TitledGridWrapper = ({
  title,
  children,
  contained = true,
  TitleGridProps,
  TypographyProps,
  GridProps,
}: IProps) => {
  return (
    <>
      <Grid item xs={12} {...TitleGridProps}>
        <Typography variant="h6" gutterBottom {...TypographyProps}>
          {title}
        </Typography>
      </Grid>

      {contained ? (
        <Grid container columnSpacing={2} rowSpacing={0} marginX={'0.5rem'} {...GridProps}>
          {children}
        </Grid>
      ) : (
        children
      )}
    </>
  );
};

export default TitledGridWrapper;
