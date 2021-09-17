// TODO: this component needs to be refactored

import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Paper,
  FormControl,
  Button,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { clearCardMessage } from '../../redux/actions/cardActions';

// styles
import '../../styles/components/CMS/CardForm.css';

// types
import { RewardTypeProps, RewardType, RewardTypeValues } from '../../types';
type BusinessOrPersonal = 'business' | 'personal';


interface Props {
  title: string;
  handleSubmit: (e: React.SyntheticEvent) => void;
  nameValue: string;
  nameChangeHandler: React.Dispatch<React.SetStateAction<string>>;
  bankValue: string;
  bankChangeHandler: React.Dispatch<React.SetStateAction<string>>;


  businessOrPersonal: string;
  businessOrPersonalChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;


  annualFeeValue: number;
  annualFeeChangeHandler: React.Dispatch<React.SetStateAction<number>>;
  rewardTypesValue: RewardTypeProps;
  rewardTypesChangeHandler?: React.Dispatch<
    React.SetStateAction<RewardTypeProps>
  >;
  handlePercentChange: (
    e: React.ChangeEvent<{ value: unknown }>,
    type: RewardType
  ) => void;
  handleRankChange: (
    e: React.ChangeEvent<{ value: unknown }>,
    type: RewardType
  ) => void;
}

export default function CardForm({
  title,
  handleSubmit,
  nameValue,
  nameChangeHandler,
  bankValue,
  bankChangeHandler,
  businessOrPersonal,
  businessOrPersonalChangeHandler,
  annualFeeValue,
  annualFeeChangeHandler,
  rewardTypesValue,
  handlePercentChange,
  handleRankChange,
}: Props) {
  const dispatch = useDispatch();
  const cardReducer = useSelector((state) => state.card);
  React.useEffect(() => {
    dispatch(clearCardMessage());
  }, []);

  return (
    <div className="card-form-container">
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
                {/* Personal or Business */}
                <Grid item xs={12} className="mt-2">
                  <FormControl>
                    <FormLabel>
                      Is this card for business or personal use?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="personal-business"
                      defaultValue={businessOrPersonal}
                      name="personal-business-radio-group"
                      value={businessOrPersonal}
                      onChange={businessOrPersonalChangeHandler}
                    >
                      <FormControlLabel
                        value="personal"
                        control={<Radio />}
                        label="Personal"
                      />
                      <FormControlLabel
                        value="business"
                        control={<Radio />}
                        label="Business"
                      />
                    </RadioGroup>
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
                    <InputLabel htmlFor="travel-rank-input">
                      Travel Rank
                    </InputLabel>
                    <Input
                      type="number"
                      id="travel-rank-input"
                      placeholder="0%"
                      value={rewardTypesValue.Travel.rank}
                      onChange={(e) =>
                        handleRankChange(e, RewardTypeValues.TRAVEL)
                      }
                      inputProps={{ min: 0, max: 5 }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Travel Description"
                      variant="outlined"
                      placeholder="description..."
                      value={rewardTypesValue.Travel.description}
                      onChange={(e) =>
                        handlePercentChange(e, RewardTypeValues.TRAVEL)
                      }
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
                    <InputLabel htmlFor="flights-rank-input">
                      Flights Rank
                    </InputLabel>
                    <Input
                      type="number"
                      id="flights-rank-input"
                      placeholder="0%"
                      value={rewardTypesValue.Flights.rank}
                      onChange={(e) =>
                        handleRankChange(e, RewardTypeValues.FLIGHTS)
                      }
                      inputProps={{ min: 0, max: 5 }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Flights Description"
                      variant="outlined"
                      placeholder="description..."
                      value={rewardTypesValue.Flights.description}
                      onChange={(e) =>
                        handlePercentChange(e, RewardTypeValues.FLIGHTS)
                      }
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
                    <InputLabel htmlFor="hotels-rank-input">
                      Flights Rank
                    </InputLabel>
                    <Input
                      type="number"
                      id="hotels-rank-input"
                      placeholder="0%"
                      value={rewardTypesValue.Hotels.rank}
                      onChange={(e) =>
                        handleRankChange(e, RewardTypeValues.HOTELS)
                      }
                      required={true}
                      inputProps={{ min: 0, max: 5 }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Hotels Description"
                      variant="outlined"
                      placeholder="description..."
                      value={rewardTypesValue.Hotels.description}
                      onChange={(e) =>
                        handlePercentChange(e, RewardTypeValues.HOTELS)
                      }
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
                    <InputLabel htmlFor="dining-rank-input">
                      Dining Rank
                    </InputLabel>
                    <Input
                      type="number"
                      id="dining-rank-input"
                      placeholder="0%"
                      value={rewardTypesValue.Dining.rank}
                      onChange={(e) =>
                        handleRankChange(e, RewardTypeValues.DINING)
                      }
                      required={true}
                      inputProps={{ min: 0, max: 5 }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Dining Description"
                      variant="outlined"
                      placeholder="description..."
                      value={rewardTypesValue.Dining.description}
                      onChange={(e) =>
                        handlePercentChange(e, RewardTypeValues.DINING)
                      }
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
                    <InputLabel htmlFor="cashback-rank-input">
                      Cashback Rank
                    </InputLabel>
                    <Input
                      type="number"
                      id="cashback-rank-input"
                      placeholder="0%"
                      value={rewardTypesValue.Cashback.rank}
                      onChange={(e) =>
                        handleRankChange(e, RewardTypeValues.CASHBACK)
                      }
                      required={true}
                      inputProps={{ min: 0, max: 5 }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Cashback Description"
                      variant="outlined"
                      placeholder="description..."
                      value={rewardTypesValue.Cashback.description}
                      onChange={(e) =>
                        handlePercentChange(e, RewardTypeValues.CASHBACK)
                      }
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
                    <InputLabel htmlFor="gas-rank-input">Gas Rank</InputLabel>
                    <Input
                      type="number"
                      id="gas-rank-input"
                      placeholder="0%"
                      value={rewardTypesValue.Gas.rank}
                      onChange={(e) =>
                        handleRankChange(e, RewardTypeValues.GAS)
                      }
                      required={true}
                      inputProps={{ min: 0, max: 5 }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Gas Description"
                      variant="outlined"
                      placeholder="description"
                      value={rewardTypesValue.Gas.description}
                      onChange={(e) =>
                        handlePercentChange(e, RewardTypeValues.GAS)
                      }
                      required={true}
                    />
                  </FormControl>
                </Grid>

                {/* GROCERIES */}
                <Grid item xs={6}>
                  <Typography variant="h5">Groceries</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <InputLabel htmlFor="groceries-rank-input">
                      Groceries Rank
                    </InputLabel>
                    <Input
                      type="number"
                      id="groceries-rank-input"
                      placeholder="0%"
                      value={rewardTypesValue.Groceries.rank}
                      onChange={(e) =>
                        handleRankChange(e, RewardTypeValues.GROCERIES)
                      }
                      required={true}
                      inputProps={{ min: 0, max: 5 }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl margin="dense" required={true} fullWidth>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Groceries Description"
                      variant="outlined"
                      placeholder="description"
                      value={rewardTypesValue.Groceries.description}
                      onChange={(e) =>
                        handlePercentChange(e, RewardTypeValues.GROCERIES)
                      }
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
