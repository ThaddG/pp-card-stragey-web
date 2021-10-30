import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

// custom components
import BackButton from '../../components/BackButton';

export default function Dashbaord() {
  return (
    <div style={{ width: '350px', margin: '60px auto 0' }}>
      <BackButton text="home" to="/" />
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

      <br />
      <Link to="/cms/stack/create">
        <Button
          className="my-1"
          size="large"
          color="primary"
          variant="contained"
        >
          Create Stack
        </Button>
      </Link>

      {/* TODO: this will probably be deleted */}
      <br />
      <Link to="/cms/stack/edit">
        <Button
          className="my-1"
          size="large"
          color="primary"
          variant="contained"
        >
          Edit Stack
        </Button>
      </Link>
    </div>
  );
}
