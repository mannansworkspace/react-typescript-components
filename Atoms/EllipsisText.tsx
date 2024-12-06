import React from 'react';

import { type SxProps, Box, Typography } from '@mui/material';

interface IProps {
  text: string | number;
  width?: string;
  sx?: SxProps;
}

const EllipsisText = ({ text, width = '180px', sx }: IProps) => {
  return (
    <Box sx={{ width }}>
      <Typography
        variant="body1"
        noWrap
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
          ...sx,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default EllipsisText;
