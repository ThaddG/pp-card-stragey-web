import React from 'react';
import { Paper, Button } from '@material-ui/core';

// styles
import '../styles/components/Navigation.css';

export default function Navigation() {
  return (
    <Paper elevation={10} className="navigationOverride my-2 py-3 px-4">
      im the navigation
    </Paper>
  );
}
