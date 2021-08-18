import React, { useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormControl,
} from '@material-ui/core';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../../hooks';
import { addCard } from '../../redux/actions/cardActions';

import { RewardTypeProps } from '../../types';

export default function AddCard() {
  const dispatch = useDispatch();
  const cardReducer = useSelector((state) => state.card);
  const [name, setName] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [annualFee, setAnnualFee] = useState<number>(0);
  const [rewardTypes, setRewardTypes] = useState<RewardTypeProps>({
    Travel: 0,
    Flights: 0,
    Hotels: 0,
    Dining: 0,
    Cashback: 0,
    Gas: 0,
  });

  const handleTravelChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Travel: Number(e.target.value) as number,
    });
  const handleFlightsChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Flights: Number(e.target.value) as number,
    });
  const handleHotelsChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Hotels: Number(e.target.value) as number,
    });
  const handleDiningChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Dining: Number(e.target.value) as number,
    });
  const handleCashbackChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Cashback: Number(e.target.value) as number,
    });
  const handleGasChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({ ...rewardTypes, Gas: Number(e.target.value) as number });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('component:', rewardTypes);
    dispatch(addCard(name, bank, annualFee, rewardTypes));
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        style={{
          maxWidth: '500px',
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h2">Add Card</Typography>
        </Grid>

        <Grid item>
          <Paper className="px-4 py-4">
            <form noValidate onSubmit={handleSubmit}>
              <Grid container>
                {/* Card Name */}
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      placeholder="Chase Sapphire Preferred"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* Card Bank */}
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      id="outlined-basic"
                      label="Bank"
                      variant="outlined"
                      placeholder="Chase"
                      value={bank}
                      onChange={(e) => setBank(e.target.value)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* Card Annual Fee */}
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      id="outlined-basic"
                      label="Annual Fee"
                      variant="outlined"
                      placeholder="95"
                      value={annualFee}
                      onChange={(e) => setAnnualFee(Number(e.target.value))}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* Reward Types */}
                <Grid item xs={12} className="center-text my-4">
                  <Typography variant="h5">Reward Types</Typography>
                </Grid>
                {/* Travel */}
                <Grid item xs={6}>
                  <Typography variant="h5">Travel</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="number"
                      id="outlined-basic"
                      label="Travel %"
                      variant="outlined"
                      placeholder="0%"
                      value={rewardTypes.Travel}
                      onChange={(e) => handleTravelChange(e)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* FLIGHTS */}
                <Grid item xs={6}>
                  <Typography variant="h5">Flights</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="number"
                      id="outlined-basic"
                      label="Flights %"
                      variant="outlined"
                      placeholder="0%"
                      value={rewardTypes.Flights}
                      onChange={(e) => handleFlightsChange(e)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* HOTELS */}
                <Grid item xs={6}>
                  <Typography variant="h5">Hotels</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="number"
                      id="outlined-basic"
                      label="Hotels %"
                      variant="outlined"
                      placeholder="0%"
                      value={rewardTypes.Hotels}
                      onChange={(e) => handleHotelsChange(e)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* DINING */}
                <Grid item xs={6}>
                  <Typography variant="h5">Dining</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="number"
                      id="outlined-basic"
                      label="Dining %"
                      variant="outlined"
                      placeholder="0%"
                      value={rewardTypes.Dining}
                      onChange={(e) => handleDiningChange(e)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* CASHBACK */}
                <Grid item xs={6}>
                  <Typography variant="h5">Cashback</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="number"
                      id="outlined-basic"
                      label="Cashback %"
                      variant="outlined"
                      placeholder="0%"
                      value={rewardTypes.Cashback}
                      onChange={(e) => handleCashbackChange(e)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
                {/* GAS */}
                <Grid item xs={6}>
                  <Typography variant="h5">Gas</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="number"
                      id="outlined-basic"
                      label="Gas %"
                      variant="outlined"
                      placeholder="0%"
                      value={rewardTypes.Gas}
                      onChange={(e) => handleGasChange(e)}
                      required={true}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
        <p style={{ fontWeight: 'bold' }}>{cardReducer.cardMessage || null}</p>
      </Grid>
    </div>
  );
}
