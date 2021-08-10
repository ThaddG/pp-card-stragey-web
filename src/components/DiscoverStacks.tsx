import React from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';

// styles
import '../styles/components/DiscoverStacks.css';

export default function DiscoverStacks() {
  return (
    <div className="px-2 py-2" style={{ backgroundColor: 'tomato' }}>
      <Typography variant="h3">Discover Stacks</Typography>
      <Typography variant="h6">
        Pick a spending category and see which credit card stacks will maximize
        your rewards the most
      </Typography>
      <Grid container>
        <Grid item>
          <Paper>
            <Box className="deck-preview px-2">
              <Typography variant="h5">Someone Deck</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
