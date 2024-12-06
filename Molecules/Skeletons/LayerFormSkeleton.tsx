import React from 'react';

import { Box, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';

import styles from 'components/AdminPanel/LayerManager/LayerForm/styles';
import { Skeleton } from 'components/Common/Atoms';
import { FormHeader } from 'components/Common/Molecules';

const LayerFormSkeleton = () => {
  const { id } = useParams();

  return (
    <Box sx={styles.leftColumnForm}>
      <Box sx={{ alignItems: 'end', ...styles.formRoot }}>
        <FormHeader disabled={true} headerFor="Layer" forUpdate={!!id} backNav="/admin/layers" />

        <>
          <Skeleton
            skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50, gridSize: 4 }]}
            iterations={3}
            wrapWithGrid
          />
          <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%', marginTop: '1rem' }}>
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '33%' }}
            />
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '67%' }}
            />
          </Box>

          <Divider sx={{ ...styles.sectionDivider, marginBlock: 2, borderColor: 'transparent' }} flexItem />

          <Skeleton
            skeletons={[
              {
                type: 'text',
                animation: 'wave',
                width: '60%',
                gridSize: 4,
                sx: { marginBlock: 1, fontSize: '1.25rem' },
              },
            ]}
            iterations={1}
            wrapWithGrid
          />
          <Skeleton
            skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50, gridSize: 4 }]}
            iterations={1}
            wrapWithGrid
          />
          <Divider sx={{ ...styles.sectionDivider, marginBlock: 2, borderColor: 'transparent' }} flexItem />

          <Skeleton
            skeletons={[
              {
                type: 'text',
                animation: 'wave',
                width: '60%',
                gridSize: 4,
                sx: { marginBlock: 1, fontSize: '1.25rem' },
              },
            ]}
            iterations={1}
            wrapWithGrid
          />
          <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 30 }]}
              wrapperStyle={{ width: '40%' }}
            />
            <Skeleton skeletons={[{ type: 'rounded', animation: 'wave', width: 24, height: 24 }]} />
            <Skeleton skeletons={[{ type: 'rounded', animation: 'wave', width: 100, height: 24 }]} />
          </Box>
          <Divider sx={{ ...styles.sectionDivider, marginBlock: 2, borderColor: 'transparent' }} flexItem />

          <Skeleton
            skeletons={[
              {
                type: 'text',
                animation: 'wave',
                width: '60%',
                gridSize: 4,
                sx: { marginBlock: 1, fontSize: '1.25rem' },
              },
            ]}
            iterations={1}
            wrapWithGrid
          />
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }}>
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '40%' }}
            />
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '60%' }}
            />
          </Box>
          <Divider sx={{ ...styles.sectionDivider, marginBlock: 2, borderColor: 'transparent' }} flexItem />

          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Skeleton
              skeletons={[{ type: 'text', animation: 'wave', width: '100%' }]}
              wrapperStyle={{ width: '35%' }}
            />
            <Skeleton skeletons={[{ type: 'circular', animation: 'wave', width: 30, height: 30 }]} />
            <Skeleton
              skeletons={[{ type: 'text', animation: 'wave', width: '100%' }]}
              wrapperStyle={{ width: '35%' }}
            />
          </Box>

          <Skeleton
            skeletons={[
              {
                type: 'text',
                animation: 'wave',
                width: '60%',
                gridSize: 4,
                sx: { marginBlock: 1, fontSize: '1.25rem' },
              },
            ]}
            iterations={1}
            wrapWithGrid
          />
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }}>
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '40%' }}
            />
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '60%' }}
            />
          </Box>
          <Divider sx={{ ...styles.sectionDivider, marginBlock: 2, borderColor: 'transparent' }} flexItem />

          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Skeleton
              skeletons={[{ type: 'text', animation: 'wave', width: '100%' }]}
              wrapperStyle={{ width: '35%' }}
            />
            <Skeleton skeletons={[{ type: 'circular', animation: 'wave', width: 30, height: 30 }]} />
            <Skeleton
              skeletons={[{ type: 'text', animation: 'wave', width: '100%' }]}
              wrapperStyle={{ width: '35%' }}
            />
          </Box>

          <Skeleton
            skeletons={[
              {
                type: 'text',
                animation: 'wave',
                width: '60%',
                gridSize: 4,
                sx: { marginBlock: 1, fontSize: '1.25rem' },
              },
            ]}
            iterations={1}
            wrapWithGrid
          />
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }}>
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '40%' }}
            />
            <Skeleton
              skeletons={[{ type: 'rounded', animation: 'wave', width: '100%', height: 50 }]}
              wrapperStyle={{ width: '60%' }}
            />
          </Box>
        </>
      </Box>
    </Box>
  );
};

export default LayerFormSkeleton;
