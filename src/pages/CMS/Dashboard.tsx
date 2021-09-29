import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

// custom components
import BackButton from '../../components/BackButton';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { getStackById } from '../../redux/actions/stackActions';

export default function Dashbaord() {
  const id = 'NV93GQnWq16fkK4hTgbn';
  const dispatch = useDispatch();
  const stack = useSelector((state) => state.stack);
  React.useEffect(() => {
    dispatch(getStackById(id));
  }, []);

  console.log("STACK:", stack);
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
    </div>
  );
}
