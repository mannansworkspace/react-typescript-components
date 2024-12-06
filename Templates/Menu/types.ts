import React, { ComponentType, MouseEventHandler } from 'react';

import { type MenuItemProps, type DividerProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { INotification } from 'lib/api/types';
import { IconComponent } from 'lib/types';

export enum MenuItemTypes {
  Header = 'Header',
  Link = 'Link',
  Action = 'Action',
  Divider = 'Divider',
  Accordian = 'Accordian',
  Notification = 'Notification',
  Custom = 'Custom',
}

interface MenuItemHeader {
  type: MenuItemTypes.Header;
  title: string;
  Icon: IconComponent;
}

interface MenuItemLink {
  type: MenuItemTypes.Link;
  to: string;
  label: string;
  style?: React.CSSProperties;
  menuItemProps?: MenuItemProps;
}

interface MenuItemAction {
  type: MenuItemTypes.Action;
  label: string;
  onClick?: (navigate: ReturnType<typeof useNavigate>) => void;
  menuItemProps?: MenuItemProps;
}

export interface AccordianItem {
  id: number;
  name: string;
  Icon: IconComponent;
  onClick?: MouseEventHandler | undefined;
  clicked?: boolean;
  notificationCount?: number;
  Component?: ComponentType;
}

interface MenuItemAccordian {
  type: MenuItemTypes.Accordian;
  items: AccordianItem[];
  expandedAccordion?: number | null;
  handleAccordion: (id: number) => void;
}

interface MenuItemDivider {
  type: MenuItemTypes.Divider;
  variant?: DividerProps['variant'];
  sx?: DividerProps['sx'];
  loading?: boolean;
}

interface MenuItemNotifications {
  type: MenuItemTypes.Notification;
  notification: INotification;
}

interface MenuItemCustom {
  type: MenuItemTypes.Custom;
  // eslint-disable-next-line no-undef
  Component: (props: { onClose: () => void }) => JSX.Element;
}

export type MenuItemType =
  | MenuItemHeader
  | MenuItemLink
  | MenuItemAction
  | MenuItemDivider
  | MenuItemAccordian
  | MenuItemNotifications
  | MenuItemCustom;
