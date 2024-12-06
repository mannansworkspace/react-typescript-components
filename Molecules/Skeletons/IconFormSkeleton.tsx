import React from 'react';

import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import styles from 'components/AdminPanel/styles';
import { Skeleton } from 'components/Common/Atoms';
import { FormHeader } from 'components/Common/Molecules';

const IconFormSkeleton = () => {
  const { id } = useParams();

  return (
    <Box
      component={'form'}
      sx={{ alignItems: 'start', ...styles.formRoot, maxHeight: 'calc(100vh - 180px)', overflow: 'auto' }}
    >
      <FormHeader disabled={true} headerFor="Icon" forUpdate={!!id} backNav="/admin/icons" />

      <>
        <Skeleton
          skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', gridSize: 4 }]}
          iterations={2}
          wrapWithGrid
        />
        <Skeleton
          skeletons={[{ type: 'text', animation: 'wave', width: '100%', gridSize: 3, sx: { marginBlock: '1rem' } }]}
          iterations={1}
          wrapWithGrid
        />
        <Skeleton
          skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 100, gridSize: 12 }]}
          iterations={1}
          wrapWithGrid
        />
      </>

      {id && (
        <Box>
          <Skeleton
            skeletons={[{ type: 'circular', animation: 'wave', height: 200, width: 200, gridSize: 12 }]}
            iterations={1}
            wrapWithGrid
          />
        </Box>
      )}
    </Box>
  );
};
export default IconFormSkeleton;
