import React from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

interface IProps {
  open: boolean;
}

const BackdropLoader = ({ open }: IProps) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoader;
