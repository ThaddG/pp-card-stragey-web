import React, { useState } from 'react';
import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';

// styles
import '../styles/components/FilterCardsMenu.css';

// TODO: remove when we get real data
// fake data
const banks: string[] = [
  'Michigan First',
  'Chase',
  'Citi Bank',
  'American Express',
  'Citizens Bank',
];
const rewardsTypes: string[] = ['Travel', 'Dining', 'Gas', 'Supermarket'];
const annualFees: number[] = [0, 95, 125];

export default function FilterCardsMenu() {
  const [bank, setBank] = useState('');
  const [rewardsType, setRewardsType] = useState('');
  const [annualFee, setAnnualFee] = useState(0);

  const handleBankChange = (event: React.ChangeEvent<{ value: unknown }>) =>
    setBank(event.target.value as string);
  const handleRewardsTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setRewardsType(event.target.value as string);
  const handleAnnualFeeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setAnnualFee(event.target.value as number);

  return (
    <Paper className="filter-cards-menu-container px-2 py-2">
      <Typography className="mb-2 center-text" variant="h5">Filter Cards</Typography>
      <form className="filter-cards-form" noValidate autoComplete="off">
        <Grid>
          <Grid item xs={12}>
            <TextField className="filter-cards-input" id="standard-basic" label="Search" />
          </Grid>
          {/* BANKS */}
          <Grid item xs={12}>
            <FormControl className="filter-cards-form-control">
              <InputLabel id="bank-select-label">Bank</InputLabel>
              <Select
                autoWidth={true}
                labelId="bank-select-label"
                id="bank-select"
                value={bank}
                onChange={handleBankChange}
              >
                {banks.map((bank, index) => (
                  <MenuItem key={index} value={bank}>
                    {bank}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* REWARDS TYPE */}
          <Grid item xs={12}>
            <FormControl className="filter-cards-form-control">
              <InputLabel id="rewards-type-select-label">
                Rewards Type
              </InputLabel>
              <Select
                labelId="rewards-type-select-label"
                id="rewards-type-select"
                value={rewardsType}
                onChange={handleRewardsTypeChange}
              >
                {rewardsTypes.map((rt, index) => (
                  <MenuItem key={index} value={rt}>
                    {rt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* ANNUAL FEE */}
          <Grid item xs={12}>
            <FormControl className="filter-cards-form-control">
              <InputLabel id="annual-fee-select-label">Annual Fee</InputLabel>
              <Select
                labelId="annual-fee-select-label"
                id="annual-fee-select"
                value={annualFee}
                onChange={handleAnnualFeeChange}
              >
                {annualFees.map((af, index) => (
                  <MenuItem key={index} value={af}>
                    {af}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button className="mb-2" color="primary" variant="contained">Apply</Button>
        <br/>
        <Button color="secondary" variant="contained">Reset Fields</Button>
      </form>
    </Paper>
  );
}
