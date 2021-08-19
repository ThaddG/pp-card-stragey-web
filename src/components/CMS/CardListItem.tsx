import React from 'react';
import { Paper, Grid, Button } from '@material-ui/core';

// types
import { CardProps } from '../../types';

// styles
import '../../styles/components/CMS/CardListItem.css';

interface Props {
  card: CardProps;
}

export default function CardListItem({ card }: Props) {
  return (
    <Paper elevation={7} className="card-list-item-container my-4 mx-2 px-2 py-2">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          {/* <strong>{card.bank || 'No Bank'}</strong> {' ('}<em>{card.id}</em>{')'} */}
          <strong>{card.bank || 'No Bank'}</strong>
        </Grid>
        <Grid item xs={12} sm={5}>
          {card.name}
        </Grid>
        <Grid item xs={5} sm={2}>
          <Button fullWidth variant="contained" color="primary">
            Edit
          </Button>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Button fullWidth variant="contained" color="secondary">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
