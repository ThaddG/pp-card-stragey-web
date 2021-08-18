import React from 'react';
import { Grid } from '@material-ui/core';

// custom components
import StackPreviewBox from './StackPreviewBox';

// styles
import '../styles/components/DiscoverStacks.css';

// TODO: remove when we get real card data
// fake deck data for testing
const stacks = [
  { id: '1', title: 'deck prev 1' },
  { id: '2', title: 'deck prev 2' },
  { id: '3', title: 'deck prev 3' },
  { id: '4', title: 'deck prev 4' },
  { id: '5', title: 'deck prev 5' },
  { id: '6', title: 'deck prev 6' },
  { id: '7', title: 'deck prev 7' },
  { id: '8', title: 'deck prev 8' },
];

export default function DiscoverStacks() {
  return (
    <div className="px-2 py-2">
      <Grid container direction="row" spacing={3}>
        {stacks.map((stack, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="grid-item-container"
          >
            <StackPreviewBox title={stack.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
