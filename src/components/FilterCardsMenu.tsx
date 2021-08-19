import React from 'react';
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

type InputEventChange = (event: React.ChangeEvent<{ value: unknown }>) => void;
interface Props {
  query: string;
  bank: string;
  rewardsType: string;
  annualFee: number | null;
  handleQueryChange: InputEventChange;
  handleBankChange: InputEventChange;
  handleRewardsTypeChange: InputEventChange;
  handleAnnualFeeChange: InputEventChange;
  resetFilters: () => void;
}

// TODO: remove when we get real data
// fake data
const banks: string[] = [
  'Michigan First',
  'Chase',
  'Citi Bank',
  'American Express',
  'Citizens Bank',
  'Capital One'
];
const rewardsTypes: string[] = ['Travel', 'Dining', 'Gas', 'Supermarket'];
const annualFees: number[] = [0, 95, 125];

export default function FilterCardsMenu({
  query,
  bank,
  rewardsType,
  annualFee,
  handleQueryChange,
  handleBankChange,
  handleRewardsTypeChange,
  handleAnnualFeeChange,
  resetFilters,
}: Props) {
  return (
    <Paper className="filter-cards-menu-container px-2 py-2">
      <Typography className="mb-2 center-text" variant="h5">
        Filter Cards
      </Typography>
      <form className="filter-cards-form" noValidate autoComplete="off">
        <Grid>
          <Grid item xs={12}>
            <TextField
              className="filter-cards-input"
              id="standard-basic"
              label="Search"
              value={query}
              onChange={handleQueryChange}
            />
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
        <br />
        <Button
          color="secondary"
          variant="contained"
          onClick={() => resetFilters()}
        >
          Reset Fields
        </Button>
      </form>
    </Paper>
  );
}
