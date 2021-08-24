import React, { useState } from 'react';

// custom components
import CardForm from '../../components/CMS/CardForm';

// redux
import { useAppDispatch as useDispatch } from '../../hooks';
import { addCard } from '../../redux/actions/cardActions';

import { RewardTypeProps, RewardType } from '../../types';

const initialRewardTypesState = {
  Travel: {
    percent: 0,
    rank: null,
  },
  Flights: {
    percent: 0,
    rank: null,
  },
  Hotels: {
    percent: 0,
    rank: null,
  },
  Dining: {
    percent: 0,
    rank: null,
  },
  Cashback: {
    percent: 0,
    rank: null,
  },
  Gas: {
    percent: 0,
    rank: null,
  },
};

export default function AddCard() {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [annualFee, setAnnualFee] = useState<number>(0);
  const [rewardTypes, setRewardTypes] = useState<RewardTypeProps>(initialRewardTypesState);

  const resetFields = () => {
    setName('');
    setBank('');
    setAnnualFee(0);
    setRewardTypes(initialRewardTypesState);
  };

  const handleRewardTypePercentChange = (
    e: React.ChangeEvent<{ value: unknown }>,
    rt: RewardType
  ) => {
    switch (rt) {
      case 'Travel':
        return setRewardTypes({
          ...rewardTypes,
          Travel: {
            ...rewardTypes.Travel,
            percent: Number(e.target.value) as number,
          },
        });
      case 'Flights':
        return setRewardTypes({
          ...rewardTypes,
          Flights: {
            ...rewardTypes.Flights,
            percent: Number(e.target.value) as number,
          },
        });
      case 'Hotels':
        return setRewardTypes({
          ...rewardTypes,
          Hotels: {
            ...rewardTypes.Hotels,
            percent: Number(e.target.value) as number,
          },
        });
      case 'Dining':
        return setRewardTypes({
          ...rewardTypes,
          Dining: {
            ...rewardTypes.Dining,
            percent: Number(e.target.value) as number,
          },
        });
      case 'Cashback':
        return setRewardTypes({
          ...rewardTypes,
          Cashback: {
            ...rewardTypes.Cashback,
            percent: Number(e.target.value) as number,
          },
        });
      case 'Gas':
        return setRewardTypes({
          ...rewardTypes,
          Gas: {
            ...rewardTypes.Gas,
            percent: Number(e.target.value) as number,
          },
        });
      default:
        return;
    }
  };

  const handleRewardTypeRankChange = (
    e: React.ChangeEvent<{ value: unknown }>,
    rt: RewardType
  ) => {
    switch (rt) {
      case 'Travel':
        return setRewardTypes({
          ...rewardTypes,
          Travel: {
            ...rewardTypes.Travel,
            rank: Number(e.target.value) as number,
          },
        });
      case 'Flights':
        return setRewardTypes({
          ...rewardTypes,
          Flights: {
            ...rewardTypes.Flights,
            rank: Number(e.target.value) as number,
          },
        });
      case 'Hotels':
        return setRewardTypes({
          ...rewardTypes,
          Hotels: {
            ...rewardTypes.Hotels,
            rank: Number(e.target.value) as number,
          },
        });
      case 'Dining':
        return setRewardTypes({
          ...rewardTypes,
          Dining: {
            ...rewardTypes.Dining,
            rank: Number(e.target.value) as number,
          },
        });
      case 'Cashback':
        return setRewardTypes({
          ...rewardTypes,
          Cashback: {
            ...rewardTypes.Cashback,
            rank: Number(e.target.value) as number,
          },
        });
      case 'Gas':
        return setRewardTypes({
          ...rewardTypes,
          Gas: {
            ...rewardTypes.Gas,
            rank: Number(e.target.value) as number,
          },
        });
      default:
        return;
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('component:', rewardTypes);
    dispatch(addCard(name, bank, annualFee, rewardTypes));
    resetFields();
  };

  return (
    <CardForm
      title="Add Card"
      handleSubmit={handleSubmit}
      nameValue={name}
      nameChangeHandler={(e) => setName(e)}
      bankValue={bank}
      bankChangeHandler={(e) => setBank(e)}
      annualFeeValue={annualFee}
      annualFeeChangeHandler={(e) => setAnnualFee(e)}
      rewardTypesValue={rewardTypes}
      handlePercentChange={handleRewardTypePercentChange}
    />
  );
}
