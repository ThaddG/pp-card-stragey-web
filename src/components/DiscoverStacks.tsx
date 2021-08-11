import React from 'react';
import { Grid } from '@material-ui/core';

// custom components
import SectionHeader from './SectionHeader';
import StackPreviewBox from './StackPreviewBox';

// styles
import '../styles/components/DiscoverStacks.css';

// fake deck data for testing
const decks = [
  { title: 'deck prev 1' },
  { title: 'deck prev 2' },
  { title: 'deck prev 3' },
  { title: 'deck prev 4' },
  { title: 'deck prev 5' },
  { title: 'deck prev 6' },
  { title: 'deck prev 7' },
  { title: 'deck prev 8' },
];

export default function DiscoverStacks() {
  return (
    // TODO: remove this testing background color
    <div className="px-2 py-2" style={{ backgroundColor: 'mintcream' }}>
      <Grid container direction="row" spacing={3}>
        {decks.map((deck, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="grid-item-container"
          >
            <StackPreviewBox title={deck.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
