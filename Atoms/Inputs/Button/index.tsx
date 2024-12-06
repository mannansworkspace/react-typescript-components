import * as React from 'react';

import MuiButton, { type ButtonProps } from '@mui/material/Button';

import { fontStyles, sizeStyles, variantStyles } from './styles';

interface IProps extends ButtonProps {
  variantType?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'shaded' | 'link';
  sizeType?: 'default' | 'sm' | 'md' | 'lg' | 'icon';
  fontStyleType?: 'default' | 'sm' | 'lg' | 'upper-lg';
  error?: boolean;
  to?: string;
}

const Button = ({
  variantType = 'default',
  sizeType = 'default',
  fontStyleType = 'default',
  error,
  sx,
  ...props
}: IProps) => {
  return (
    <MuiButton
      sx={theme => ({
        borderRadius: '10px',
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
        '&:disabled': {
          opacity: 0.5,
          pointerEvents: 'none',
        },
        ...variantStyles(theme, variantType, error),
        ...sizeStyles(sizeType),
        ...fontStyles(fontStyleType),
        ...(sx as object),
      })}
      {...props}
    />
  );
};

export default Button;
