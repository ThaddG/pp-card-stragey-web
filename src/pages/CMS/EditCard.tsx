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
import { RewardTypeProps, EditedCardProps } from '../../types';

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
    Travel: 0,
    Flights: 0,
    Hotels: 0,
    Dining: 0,
    Cashback: 0,
    Gas: 0,
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

  // TODO: refactor this. there has to be a better way to handle these
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
      nameValue={name}
      nameChangeHandler={(e) => setName(e)}
      bankValue={bank}
      bankChangeHandler={(e) => setBank(e)}
      annualFeeValue={annualFee}
      annualFeeChangeHandler={(e) => setAnnualFee(e)}
      rewardTypesValue={rewardTypes}
      handleTravelChange={handleTravelChange}
      handleFlightsChange={handleFlightsChange}
      handleHotelsChange={handleHotelsChange}
      handleDiningChange={handleDiningChange}
      handleCashbackChange={handleCashbackChange}
      handleGasChange={handleGasChange}
    />
  );
}
