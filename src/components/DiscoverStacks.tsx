import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';

export default function DiscoverStacks() {
  return (
    <Container style={{ backgroundColor: 'tomato' }}>
      <Typography variant="h3">Discover Stacks</Typography>
      <Typography variant="h6">
        Pick a spending category and see which credit card stacks will maximize
        your rewards the most
      </Typography>
    </Container>
  );
}
