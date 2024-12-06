import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

interface NotificationLabelProps {
  count: number;
  top?: string;
  left?: string;
  animate?: boolean;
}

function NotificationLabel({ count, top = '-8px', left = '-5px', animate = false }: NotificationLabelProps) {
  const [prevCount, setPrevCount] = useState(count);
  const [isAnimating, setIsAnimating] = useState(false);

  const useStyles = {
    root: {
      position: 'absolute',
      top,
      left,
      borderRadius: '50%',
      backgroundColor: 'red',
      width: '1rem',
      height: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: isAnimating ? 'pulse 2s infinite' : 'none',

      '& > span': {
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 'normal',
      },
      '@keyframes pulse': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.5)' },
        '100%': { transform: 'scale(1)' },
      },
    },
  };

  useEffect(() => {
    if (animate && count > prevCount) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 7000);
    }
    setPrevCount(count);
  }, [count, prevCount, animate]);

  return (
    <>
      {count ? (
        <Box sx={useStyles.root}>
          <Typography variant="caption">{count}</Typography>
        </Box>
      ) : null}
    </>
  );
}

export default NotificationLabel;
