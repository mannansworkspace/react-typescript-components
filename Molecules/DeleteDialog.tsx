import React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

import styles from 'components/AdminPanel/styles';

import { COLORS } from 'config/materialTheme';

interface IProps {
  open: boolean;
  onClose: () => void;
  heading?: string;
  label?: string;
  onClick?: () => void;
  canDelete?: boolean;
}

const DeleteDialog: React.FC<IProps> = ({
  open,
  onClose,
  heading = 'Delete Layer',
  label = 'Delete',
  onClick,
  canDelete = true,
}) => {
  const handleDialogClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleDelete = () => {
    if (onClick) {
      onClick();
    }
    handleDialogClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: '20px',
          backgroundColor: COLORS.BLACK,
        },
      }}
    >
      <DialogTitle textAlign="center">
        {label} {heading}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {!canDelete
            ? `The ${heading.toLowerCase()} is associated with a layer, cannot be deleted!`
            : `Are you sure you want to delete the ${heading.toLowerCase()}?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button fullWidth onClick={handleDialogClose} color="primary" sx={{ ...styles.dialogButtons }}>
          Cancel
        </Button>
        {canDelete && (
          <Button fullWidth onClick={handleDelete} color="error" sx={{ ...styles.dialogButtons }}>
            {label}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
