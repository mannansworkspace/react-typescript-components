import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
  duration: number;
  expiryTimestamp: Date;
  onExpire: () => void;
}

const Timer = ({ duration, expiryTimestamp, onExpire }: TimerProps) => {
  const { seconds, restart } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  useEffect(() => {
    restart(expiryTimestamp);
  }, [expiryTimestamp, restart]);

  const remainingSeconds = Math.max(seconds, 0); // Ensure no negative seconds
  const progress = (remainingSeconds / duration) * 100;
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '5px' }}>
      <CircularProgress variant="determinate" value={progress} size={30} sx={{ color: 'white' }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
          {`${remainingSeconds}s`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
