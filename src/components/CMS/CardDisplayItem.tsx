import React from 'react';
import Paper from '@material-ui/core/Paper';

// types
import { CardProps } from '../../types';

interface Props {
  card: CardProps;
}

export default function CardDisplayItem({ card }: Props) {
  return <Paper elevation={4}>{card.name}</Paper>;
}
