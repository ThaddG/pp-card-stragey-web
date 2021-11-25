import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// custom components
import BackButton from '../../components/BackButton';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { getStackById } from '../../redux/actions/stackActions';
// TODO: REMOVE AFTER MAINTENANCE
import { logout } from '../../redux/actions/authActions';

export default function Dashbaord() {
  const id = 'NV93GQnWq16fkK4hTgbn';
  const dispatch = useDispatch();
  const stack = useSelector((state) => state.stack);
  React.useEffect(() => {
    dispatch(getStackById(id));
  }, []);

  console.log('STACK:', stack);
  return (
    <div style={{ width: '350px', margin: '60px auto 0' }}>
      <BackButton text="home" to="/" />
      <Typography variant="h2">Dashboard</Typography>
      {/* TODO: REMOVE AFTER MAINTENANCE */}
      <Button color="secondary" variant="contained" onClick={() => dispatch(logout())}>
        Signout
      </Button>
      <br />
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
    </div>
  );
}
