import React from 'react';
import { Grid, Button } from '@material-ui/core';

// custom components
import FilterCardsMenu from './FilterCardsMenu';
import CardPreview from './CardPreview';

// TODO: remove this when we get real data
const cards = [
  { name: 'Citi Diamond Preferred' },
  { name: 'Chase Freedom Unlimited' },
  { name: 'Capital One Platinum' },
  { name: 'Discover Student' },
];

export default function CreditCards() {
  return (
    <div className="px-2 py-2" style={{ backgroundColor: 'papayawhip' }}>
      <Grid container direction="row" spacing={3}>
        <Grid className="grid-item-container" item xs={12} sm={6} md={4} lg={3}>
          <FilterCardsMenu />
        </Grid>
        {cards.map((card, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="grid-item-container"
          >
            <CardPreview card={card} />
          </Grid>
        ))}
      </Grid>
      <Button className="mt-4" color="primary" variant="contained" fullWidth={true}>View Library {`->`}</Button>
    </div>
  );
}
