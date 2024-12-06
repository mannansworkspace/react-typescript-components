import React from 'react';

import { Box, type SxProps, Typography } from '@mui/material';

import { COLORS } from 'config/materialTheme';

interface IProps {
  title: string;
  subtitle?: string;
  sx?: SxProps;
  subStyles?: SxProps;
}

const TitleText = ({ title, subtitle, sx, subStyles }: IProps) => (
  <Box sx={{ py: '5px', ...sx }}>
    <Typography
      variant="body1"
      fontSize="0.8rem"
      color={subtitle ? COLORS.DISABLED : COLORS.SMOKE_WHITE}
      sx={{ pl: '3px', display: 'inline-block' }}
      noWrap
    >
      {title}
    </Typography>

    {subtitle && (
      <Typography
        variant="body1"
        color={COLORS.SMOKE_WHITE}
        fontSize="0.8rem"
        sx={{ pl: '8px', display: 'inline-block', ...subStyles }}
        noWrap
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default TitleText;
