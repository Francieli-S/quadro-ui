import { FC } from 'react';
import { Box, Grid } from '@mui/material';

export interface CardProps {
  title: string;
}

export const Card: FC<CardProps> = ({ title }) => {
  return (
    <Box
      sx={{ backgroundColor: 'yellow', padding: '10px', borderRadius: '5px' }}
    >
      <Grid container>
        <Grid item xs={12}>
          {title}
        </Grid>
      </Grid>
    </Box>
  );
};
