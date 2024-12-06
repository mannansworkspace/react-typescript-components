import React, { CSSProperties, Fragment } from 'react';

import { Grid, Skeleton as MuiSkeleton, type SxProps, type Theme } from '@mui/material';

interface IProps {
  skeletons: {
    type?: 'text' | 'circular' | 'rounded' | 'rectangular';
    variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
    animation?: 'pulse' | 'wave' | false;
    height?: number | string;
    width?: number | string;
    sx?: SxProps<Theme>;
    gridSize?: number;
  }[];
  wrapperStyle?: CSSProperties;
  wrapWithGrid?: boolean;
  iterations?: number;
  wrapperIterations?: number;
}

const Skeleton = ({ skeletons, wrapperStyle, wrapWithGrid = false, iterations = 1, wrapperIterations = 1 }: IProps) => {
  const renderSkeletons = () => {
    return Array(iterations)
      .fill(skeletons)
      .flat()
      .map((skeleton, index) => {
        const { type, variant, height, width, sx, animation = 'pulse', gridSize = 12 } = skeleton;

        const skeletonComponent = (
          <MuiSkeleton
            key={`${index}_${type}`}
            animation={animation}
            variant={variant || type}
            height={height}
            width={width}
            sx={{ backgroundColor: '#333', ...sx }}
          />
        );

        if (!wrapWithGrid) return <Fragment key={index}>{skeletonComponent}</Fragment>;

        return (
          <Grid item xs={gridSize} key={index}>
            {skeletonComponent}
          </Grid>
        );
      });
  };

  return (
    <>
      {Array(wrapperIterations)
        .fill(0)
        .map((_, idx) =>
          wrapWithGrid ? (
            <Grid key={idx} container spacing={2} style={wrapperStyle}>
              {renderSkeletons()}
            </Grid>
          ) : (
            <div key={idx} style={wrapperStyle}>
              {renderSkeletons()}
            </div>
          )
        )}
    </>
  );
};

export default Skeleton;
