import React from 'react';

import { SquareRounded } from '@mui/icons-material';
import { Box, Typography, type SxProps } from '@mui/material';

import { Chip } from 'components/Common/Atoms';

import { ILegendItem } from 'lib/api/types';

import { S3_URL } from 'config';

interface IProps {
  legendItem: ILegendItem;
  sx?: SxProps;
}

const LegendItem = ({ legendItem, sx }: IProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        py: '3px',
        ...sx,
      }}
    >
      {'color' in legendItem && <SquareRounded sx={{ '& > path': { fill: legendItem.color }, pr: '5px' }} />}

      {'icon' in legendItem && (
        <Box sx={{ pr: '5px' }}>
          <img src={`${S3_URL}/${legendItem.icon}`} alt={legendItem.name} style={{ width: 24, height: 24 }} />
        </Box>
      )}

      {'value' in legendItem && <Chip label={legendItem.value} sx={{ mx: 1 }} />}

      <Typography variant="body1" fontSize="0.7rem" noWrap>
        {'label' in legendItem ? legendItem.label : legendItem.name}
      </Typography>
    </Box>
  );
};

export default LegendItem;
