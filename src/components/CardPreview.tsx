import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

// styles
import '../styles/components/CardPreview.css';

// types/interfaces
import { CardProps } from './CreditCards';

interface Props {
  card: CardProps;
}

export default function CardPreview({ card }: Props) {
  return (
    <Paper className="paper-container">
      <Box className="card-preview px-2">
        <Typography variant="h5">{card.name}</Typography>
        <Typography variant="h5">{card.bank}</Typography>
        <Typography variant="h5">
          {card.rewardTypes.map((rt, index: number) => (
            <Typography key={index}>{rt}</Typography>
          ))}
        </Typography>
        <Typography variant="h5">{card.annualFee}</Typography>
      </Box>
    </Paper>
  );
}
