import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Paper, Grid } from '@material-ui/core';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../hooks';

interface Props {}

interface ParamProps {
  id: string;
}

export default function Stack() {
  const firestore = useSelector(state => state.firestore);
  const { id } = useParams<ParamProps>();

  function fetchData() {}

  console.log("FIRESTORE:", firestore);
  return (
    <Grid>
      <Grid item>
        <Paper>
          {id}
        </Paper>
      </Grid>
    </Grid>
  );
}
