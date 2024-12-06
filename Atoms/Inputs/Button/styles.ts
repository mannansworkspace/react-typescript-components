import type { Theme } from '@mui/material/styles';
import { Property } from 'csstype';

import { COLORS } from 'config/materialTheme';

export const variantStyles = (theme: Theme, variant: string, error?: boolean) => {
  switch (variant) {
    case 'destructive':
      return {
        backgroundColor: theme.palette.error.main,
        color: error ? 'red' : theme.palette.error.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.error.dark,
        },
      };
    case 'outline':
      return {
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        color: error ? 'red' : theme.palette.text.primary,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      };
    case 'secondary':
      return {
        backgroundColor: theme.palette.secondary.main,
        color: error ? 'red' : theme.palette.secondary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
        },
      };
    case 'shaded':
      return {
        backgroundColor: COLORS.DARK,
        color: error ? 'red' : theme.palette.text.primary,
        '&:hover': {
          backgroundColor: COLORS.BLACK_TRANSPARENT,
        },
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: error ? 'red' : theme.palette.text.primary,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      };
    case 'link':
      return {
        backgroundColor: 'transparent',
        color: error ? 'red' : theme.palette.primary.main,
        textDecoration: 'underline',
        '&:hover': {
          textDecoration: 'underline',
          backgroundColor: 'transparent',
        },
      };
    case 'default':
    default:
      return {
        backgroundColor: COLORS.SECONDARY,
        color: error ? 'red' : 'white',
        '&:hover': {
          backgroundColor: COLORS.DARK,
        },
      };
  }
};

export const sizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return {
        height: 36,
        padding: '6px 16px',
        px: '6px',
        py: '16px',
      };
    case 'md':
      return {
        height: 44,
        px: '10px',
        py: '20px',
      };
    case 'lg':
      return {
        height: 44,
        px: '12px',
        py: '24px',
      };
    case 'icon':
      return {
        height: 40,
        width: 40,
        p: 8,
        minWidth: 'unset',
      };
    case 'default':
    default:
      return {
        height: 40,
        px: '8px',
        py: '20px',
      };
  }
};

export const fontStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return {
        textTransform: 'none' as Property.TextTransform,
        fontWeight: '500',
        fontSize: '0.875rem',
      };
    case 'upper-lg':
      return {
        textTransform: 'uppercase' as Property.TextTransform,
        fontWeight: 'bold',
        fontSize: '1rem',
        letterSpacing: '1px',
      };
    case 'lg':
      return {
        textTransform: 'none' as Property.TextTransform,
        fontWeight: 'bold',
        fontSize: '1rem',
      };
    case 'default':
    default:
      return {
        textTransform: 'none' as Property.TextTransform,
        fontWeight: '500',
        fontSize: '0.875rem',
      };
  }
};
