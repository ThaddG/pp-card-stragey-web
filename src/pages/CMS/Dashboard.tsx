import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

// custom components
import CardsList from './CardsList';
import AddCard from './AddCard';
import EditCard from './EditCard';

export default function Dashbaord() {
  return (
    <>
      <Typography variant="h2">Dashboard</Typography>
      <Link to="/cms/list">
        <Button
          className="my-1"
          size="large"
          color="primary"
          variant="contained"
        >
          Card List
        </Button>
      </Link>

      <br />
      <Link to="/cms/add">
        <Button
          className="my-1"
          size="large"
          color="primary"
          variant="contained"
        >
          Add Card
        </Button>
      </Link>
    </>
  );
}
