// TODO: this component needs to be refactored

import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Paper,
  FormControl,
  Button,
} from '@material-ui/core';

// redux
import { useAppSelector as useSelector } from '../../hooks';

// types
import { RewardTypeProps } from '../../types';

interface Props {
  title: string;
  handleSubmit: (e: React.SyntheticEvent) => void;
  nameValue: string;
  nameChangeHandler: React.Dispatch<React.SetStateAction<string>>;
  bankValue: string;
  bankChangeHandler: React.Dispatch<React.SetStateAction<string>>;
  annualFeeValue: number;
  annualFeeChangeHandler: React.Dispatch<React.SetStateAction<number>>;
  rewardTypesValue: RewardTypeProps;
  rewardTypesChangeHandler?: React.Dispatch<
    React.SetStateAction<RewardTypeProps>
  >;
  handleTravelChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  handleFlightsChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  handleHotelsChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  handleDiningChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  handleCashbackChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  handleGasChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
}

export default function CardForm({
  title,
  handleSubmit,
  nameValue,
  nameChangeHandler,
  bankValue,
  bankChangeHandler,
  annualFeeValue,
  annualFeeChangeHandler,
  rewardTypesValue,
  rewardTypesChangeHandler,
  handleTravelChange,
  handleFlightsChange,
  handleHotelsChange,
  handleDiningChange,
  handleCashbackChange,
  handleGasChange,
}: Props) {
  const cardReducer = useSelector((state) => state.card);
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
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
          <Typography variant="h2">{title}</Typography>
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
                      value={nameValue}
                      onChange={(e) => nameChangeHandler(e.target.value)}
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
                      value={bankValue}
                      onChange={(e) => bankChangeHandler(e.target.value)}
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
                      value={annualFeeValue}
                      onChange={(e) =>
                        annualFeeChangeHandler(Number(e.target.value))
                      }
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
                      value={rewardTypesValue.Travel}
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
                      value={rewardTypesValue.Flights}
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
                      value={rewardTypesValue.Hotels}
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
                      value={rewardTypesValue.Dining}
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
                      value={rewardTypesValue.Cashback}
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
                      value={rewardTypesValue.Gas}
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
