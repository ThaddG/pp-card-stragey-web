import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '@fontsource/roboto';

// custom components
import Navigation from './Navigation';

// styles
import '../styles/components/Header.css';

export default function Header() {
  return (
    <Container maxWidth={false} className="container-override pt-2">
      <Navigation />
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Grid className="header-text" container alignContent="center">
          <Grid item>
            <Paper elevation={10} className="px-1 py-4">
              <Container maxWidth="sm">
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                  Maximize your rewards with credit cards that compliment one
                  another
                </Typography>
                <Typography variant="subtitle1">
                  Increase your income by stacking credit cards with benefits
                  that compliment each other
                </Typography>
                <Button
                  className="mt-3 mb-2"
                  variant="contained"
                  color="primary"
                >
                  View Stacks
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
