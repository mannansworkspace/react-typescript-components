import React from 'react';

import { Grid, type SxProps, Typography } from '@mui/material';
import { startCase } from 'lodash';

import { EllipsisText } from 'components/Common/Atoms';

interface IProps {
  name: string;
  value: string | number;
  sxLabel?: SxProps;
  sxValue?: SxProps;
}

const LabeledValueDisplay = ({ name, value, sxLabel, sxValue }: IProps) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={sxLabel}>
          {startCase(name)}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <EllipsisText text={value} width="100%" sx={sxValue} />
      </Grid>
    </>
  );
};

export default LabeledValueDisplay;
