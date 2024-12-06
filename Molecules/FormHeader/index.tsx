import React from 'react';

import { ArrowBack } from '@mui/icons-material';
import SaveIcon from '@mui/icons-material/Save';
import UpdateIcon from '@mui/icons-material/Update';
import { Box, IconButton, type SxProps, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Common/Atoms/Inputs';

import styles from './styles';

interface Iprops {
  headerFor: string;
  forUpdate: boolean;
  loading?: boolean;
  disabled?: boolean;
  backNav: string;
  sxWrapper?: SxProps;
  sxHeader?: SxProps;
  sxButton?: SxProps;
  secondaryButton?: {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    sxButton?: SxProps;
  };
}

const FormHeader = ({
  headerFor,
  forUpdate,
  backNav,
  sxWrapper = styles.wrapper,
  sxHeader = styles.header,
  sxButton,
  secondaryButton,
  loading = false,
  disabled = false,
}: Iprops) => {
  const navigate = useNavigate();

  return (
    <Box sx={sxWrapper}>
      <Box sx={sxHeader}>
        <IconButton sx={{ padding: 0 }} onClick={() => navigate(backNav)}>
          <ArrowBack fontSize="large" />
        </IconButton>
        <Typography sx={{ display: 'inline-flex', pl: '1rem' }} variant="h5">
          {headerFor} {forUpdate ? 'Updation' : 'Creation'}
        </Typography>
      </Box>

      <Box>
        {secondaryButton && (
          <Button
            sx={{
              mr: 1,
              ...secondaryButton.sxButton,
            }}
            fontStyleType="sm"
            sizeType="sm"
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.text}
          </Button>
        )}
        <Button
          startIcon={loading ? <CircularProgress size={20} /> : forUpdate ? <UpdateIcon /> : <SaveIcon />}
          type="submit"
          sx={sxButton}
          fontStyleType="upper-lg"
          disabled={loading || disabled}
        >
          {forUpdate ? 'Update' : 'Create'}
        </Button>
      </Box>
    </Box>
  );
};

export default FormHeader;
