import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

interface IProps {
  text: string;
}

const TextDivider = ({ text }: IProps) => (
  <Box display="flex" alignItems="center">
    <Divider sx={{ flexGrow: 1 }} />
    <Typography sx={{ px: 2 }} variant="body2" color="text.secondary">
      {text}
    </Typography>
    <Divider sx={{ flexGrow: 1 }} />
  </Box>
);

export default TextDivider;
