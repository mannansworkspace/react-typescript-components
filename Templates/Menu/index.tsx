import React, { Fragment, useState } from 'react';

import { ExpandMore } from '@mui/icons-material';
import {
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Divider,
  type IconButtonProps,
  type MenuProps,
  Box,
  Typography,
  LinearProgress,
  Accordion,
  AccordionSummary,
  Tooltip,
} from '@mui/material';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';

import { EllipsisText, NotificationLabel } from 'components/Common/Atoms';

import { IconComponent } from 'lib/types';

import styles from './styles';
import { MenuItemType, MenuItemTypes } from './types';

interface IProps {
  menuItems: MenuItemType[];
  buttonProps: Omit<IconButtonProps, 'onClick'>;
  notificationCount?: number;
  menuProps: Omit<MenuProps, 'anchorEl' | 'open' | 'onClose'>;
  Icon: IconComponent;
  iconStyle?: React.CSSProperties;
  title?: string;
  animateNotificationCount?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const getTextColor = (type: string) => {
  switch (type) {
    case 'Feature':
      return 'green';
    case 'Layer':
      return 'red';
    case 'User':
      return 'blue';
    default:
      return 'gray';
  }
};

const Content = ({ item, handleClose }: { item: MenuItemType; handleClose: () => void }) => {
  const navigate = useNavigate();

  if (item.type === MenuItemTypes.Link)
    return (
      <Link to={item.to} onClick={handleClose} style={item.style}>
        <MenuItem sx={item.menuItemProps?.sx}>{item.label}</MenuItem>
      </Link>
    );

  if (item.type === MenuItemTypes.Divider) {
    if (item.loading) return <LinearProgress color="error" sx={{ height: '0.6px' }} />;

    return <Divider variant={item.variant} sx={item.sx} />;
  }

  if (item.type === MenuItemTypes.Header) {
    const Icon = item.Icon;

    return (
      <Box onClick={handleClose}>
        <Typography variant="caption">{item.title}</Typography>
        <Icon />
      </Box>
    );
  }

  if (item.type === MenuItemTypes.Accordian) {
    return (
      <>
        {item.items.map(({ id, name, Icon, onClick, clicked, notificationCount, Component }, index) => {
          return (
            <Fragment key={id}>
              <Accordion
                sx={styles.accordian}
                expanded={item.expandedAccordion === id}
                onChange={() => item.handleAccordion(id)}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <IconButton sx={styles.accordianIcon(!!onClick, !!clicked)} onClick={onClick}>
                    {Icon && <Icon />}
                  </IconButton>
                  <Box display={'flex'}>
                    <EllipsisText width="270px" text={name} />
                    <Box position={'relative'} mx={0.5} mb={2}>
                      <NotificationLabel count={notificationCount || 0} />
                    </Box>
                  </Box>
                </AccordionSummary>
                {Component && <Component />}
              </Accordion>
              <Divider variant="inset" component="hr" sx={styles.accordianDivider} light />
            </Fragment>
          );
        })}
      </>
    );
  }

  if (item.type === MenuItemTypes.Notification) {
    return (
      <>
        <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box>
            <Box sx={{ fontWeight: 600, fontSize: '12px', color: getTextColor(item.notification.type as string) }}>
              {item.notification.type} added:
            </Box>
            <Box>{item.notification.message}</Box>
            <Box sx={{ fontSize: '10px', justifyContent: 'end', display: 'flex' }}>
              {moment(item.notification.createdAt).format('MMMM DD, YYYY, h:mm:ss A')}
            </Box>
          </Box>
        </MenuItem>
      </>
    );
  }

  if (item.type === MenuItemTypes.Custom) {
    const { Component } = item;

    return <Component onClose={handleClose} />;
  }

  return (
    <MenuItem
      sx={item.menuItemProps?.sx}
      onClick={() => {
        item.onClick?.(navigate);
        handleClose();
      }}
    >
      {item.label}
    </MenuItem>
  );
};

const Menu = ({
  menuItems,
  buttonProps,
  notificationCount,
  menuProps,
  Icon,
  iconStyle,
  title,
  animateNotificationCount,
  onClick,
}: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    onClick?.(event);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={title || ''} arrow={true} placement="left" PopperProps={{ sx: styles.tooltip }}>
        <IconButton {...buttonProps} onClick={handleClick}>
          <Icon style={iconStyle} />
          <NotificationLabel count={notificationCount || 0} animate={animateNotificationCount} />
        </IconButton>
      </Tooltip>
      <MuiMenu anchorEl={anchorEl} open={open} onClose={handleClose} {...menuProps}>
        {menuItems.map((item, index) => (
          <Content key={`${index}_${item.type}`} item={item} handleClose={handleClose} />
        ))}
      </MuiMenu>
    </>
  );
};

export default Menu;

export { MenuItemTypes, type MenuItemType, type AccordianItem } from './types';
