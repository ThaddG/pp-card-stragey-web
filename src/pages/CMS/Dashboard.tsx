import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

// custom components
import CardsList from './CardsList';
import AddCard from './AddCard';
import EditCard from './EditCard';
import BackButton from '../../components/BackButton';

export default function Dashbaord() {
  return (
    <div style={{width: '350px', margin: '60px auto 0'}}>
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
    </div>
  );
}
