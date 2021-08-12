import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

// styles
import '../styles/components/CardPreview.css';

interface CardProps {
  name: string;
}

interface Props {
  card: CardProps;
}

export default function CardPreview({card}: Props) {
  return (
    <Paper className="paper-container">
      <Box className="card-preview px-2">
        <Typography variant="h5">{card.name}</Typography>
      </Box>
    </Paper>
  );
}
