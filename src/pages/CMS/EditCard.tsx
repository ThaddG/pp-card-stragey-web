import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';

// custom components
import CardForm from '../../components/CMS/CardForm';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../../hooks';
import {
  getCardById,
  editCard,
  clearCard,
} from '../../redux/actions/cardActions';

// types
import { RewardTypeProps, EditedCardProps, RewardType } from '../../types';

interface ParamProps {
  id: string;
}

export default function EditCard() {
  const { id } = useParams<ParamProps>();
  const dispatch = useDispatch();
  const cardReducer = useSelector((state) => state.card);
  const [name, setName] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [annualFee, setAnnualFee] = useState<number>(0);
  const [rewardTypes, setRewardTypes] = useState<RewardTypeProps>({
    Travel: {
      percent: 0,
      rank: 0,
    },
    Flights: {
      percent: 0,
      rank: 0,
    },
    Hotels: {
      percent: 0,
      rank: 0,
    },
    Dining: {
      percent: 0,
      rank: 0,
    },
    Cashback: {
      percent: 0,
      rank: 0,
    },
    Gas: {
      percent: 0,
      rank: 0,
    },
  });

  useEffect(() => {
    dispatch(clearCard());
    dispatch(getCardById(id));
  }, []);

  useEffect(() => {
    if (isLoaded(cardReducer.current)) {
      setName(cardReducer.current.name);
      setBank(cardReducer.current.bank);
      setAnnualFee(cardReducer.current.annualFee);
      setRewardTypes(cardReducer.current.rewardTypes);
    }
  }, [cardReducer.current]);

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
    const cardPayload: EditedCardProps = {
      name,
      bank,
      annualFee,
      rewardTypes,
    };
    e.preventDefault();
    console.log('component:', rewardTypes);
    dispatch(editCard(id, cardPayload));
  };
  return (
    <CardForm
      title="Edit Card"
      handleSubmit={handleSubmit}
      nameValue={isEmpty(cardReducer.current.name) ? 'loading name ...' : name}
      nameChangeHandler={(e) => setName(e)}
      bankValue={isEmpty(cardReducer.current.name) ? 'loading bank ...' : bank}
      bankChangeHandler={(e) => setBank(e)}
      annualFeeValue={annualFee}
      annualFeeChangeHandler={(e) => setAnnualFee(e)}
      rewardTypesValue={rewardTypes}
      handlePercentChange={handleRewardTypePercentChange}
      handleRankChange={handleRewardTypeRankChange}
    />
  );
}
