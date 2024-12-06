import { ReactNode } from 'react';

import { Drawer as MuiDrawer, Box } from '@mui/material';
import { type DrawerProps } from '@mui/material';

import { globalController } from 'store/globalController';

export interface IProps extends Omit<DrawerProps, 'onKeyDown'> {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

const Drawer = (props: IProps) => {
  const { header, children, footer } = props;

  return (
    <MuiDrawer {...props} onKeyDown={globalController.handleKeyDown}>
      <Box>
        {header && header}
        {children && children}
        {footer && footer}
      </Box>
    </MuiDrawer>
  );
};
export default Drawer;

export { DrawerAnchors } from './types';
