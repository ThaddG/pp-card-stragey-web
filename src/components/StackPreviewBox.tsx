import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

// styles
import '../styles/components/StackPreviewBox.css';

interface Props {
  title: string;
}

export default function StackPreviewBox({title}: Props) {
  return (
    <Paper className="paper-container">
      <Box className="deck-preview px-2">
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Paper>
  );
}
