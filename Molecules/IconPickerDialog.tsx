import React from 'react';

import { CloseSharp } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Typography } from '@mui/material';

import { COLORS } from 'config/materialTheme';

import { IIcon } from 'lib/api/types';

import { S3_URL } from 'config';

interface IProps {
  icons: IIcon[];
  open: boolean;
  onClose: () => void;
  onSelectIcon: (icon: IIcon) => void;
}

const IconPickerDialog = ({ icons, open, onClose, onSelectIcon }: IProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          minWidth: '40vw',
          minHeight: '50vh',
        },
      }}
    >
      <DialogTitle variant="h5" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Select an Icon
        <IconButton onClick={onClose}>
          <CloseSharp fontSize="large" />
        </IconButton>
      </DialogTitle>

      <Divider sx={{ borderColor: COLORS.DISABLED }} />

      <DialogContent>
        <Grid container spacing={3}>
          {icons.map(({ name, key, id }) => (
            <Grid item xs={4} key={key}>
              <IconButton
                sx={{
                  borderRadius: '10px',
                  display: 'flex',
                  gap: '8px',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'start',
                }}
                onClick={() => onSelectIcon({ name, key, id })}
              >
                <img src={`${S3_URL}/${key}`} alt={name} style={{ width: 48, height: 48 }} />
                <Typography variant="body1" color={'#fff'}>
                  {name}
                </Typography>
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default IconPickerDialog;
