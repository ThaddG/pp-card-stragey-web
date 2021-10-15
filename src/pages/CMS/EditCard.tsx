import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';

// custom components
import CardForm from '../../components/CMS/CardForm';
import BackButton from '../../components/BackButton';

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
  const [businessOrPersonal, setBusinessOrPersonal] =
    useState<string>('personal');
  const [annualFee, setAnnualFee] = useState<number>(0);
  const [rewardTypes, setRewardTypes] = useState<RewardTypeProps>({
    Travel: {
      description: '',
      rank: 0,
    },
    Flights: {
      description: '',
      rank: 0,
    },
    Hotels: {
      description: '',
      rank: 0,
    },
    Dining: {
      description: '',
      rank: 0,
    },
    Cashback: {
      description: '',
      rank: 0,
    },
    Gas: {
      description: '',
      rank: 0,
    },
    Groceries: {
      description: '',
      rank: 0,
    },
  });
  const [cardImage, setCardImage] = useState<string>('');

  useEffect(() => {
    dispatch(clearCard());
    dispatch(getCardById(id));
  }, []);

  useEffect(() => {
    if (isLoaded(cardReducer.current)) {
      setName(cardReducer.current.name);
      setBank(cardReducer.current.bank);
      setBusinessOrPersonal(cardReducer.current.businessOrPersonal);
      setAnnualFee(cardReducer.current.annualFee);
      setRewardTypes(cardReducer.current.rewardTypes);
      setCardImage(cardReducer.current.image)
    }
  }, [cardReducer.current]);

  const handleRadioButtonChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setBusinessOrPersonal(e.currentTarget.value);
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
            description: String(e.target.value),
          },
        });
      case 'Flights':
        return setRewardTypes({
          ...rewardTypes,
          Flights: {
            ...rewardTypes.Flights,
            description: String(e.target.value),
          },
        });
      case 'Hotels':
        return setRewardTypes({
          ...rewardTypes,
          Hotels: {
            ...rewardTypes.Hotels,
            description: String(e.target.value),
          },
        });
      case 'Dining':
        return setRewardTypes({
          ...rewardTypes,
          Dining: {
            ...rewardTypes.Dining,
            description: String(e.target.value),
          },
        });
      case 'Cashback':
        return setRewardTypes({
          ...rewardTypes,
          Cashback: {
            ...rewardTypes.Cashback,
            description: String(e.target.value),
          },
        });
      case 'Gas':
        return setRewardTypes({
          ...rewardTypes,
          Gas: {
            ...rewardTypes.Gas,
            description: String(e.target.value),
          },
        });
      case 'Groceries':
        return setRewardTypes({
          ...rewardTypes,
          Groceries: {
            ...rewardTypes.Groceries,
            description: String(e.target.value),
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
      case 'Groceries':
        return setRewardTypes({
          ...rewardTypes,
          Groceries: {
            ...rewardTypes.Groceries,
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
      businessOrPersonal,
      annualFee,
      rewardTypes,
      image: cardImage
    };
    e.preventDefault();
    console.log('component:', rewardTypes);
    dispatch(editCard(id, cardPayload));
  };


  console.log("CARD IMAGE:", cardImage);

  return (
    <>
    <BackButton text="Dashboard" to="/cms" />
    <CardForm
      title="Edit Card"
      handleSubmit={handleSubmit}
      nameValue={isEmpty(cardReducer.current.name) ? 'loading name ...' : name}
      nameChangeHandler={(e) => setName(e)}
      bankValue={isEmpty(cardReducer.current.name) ? 'loading bank ...' : bank}
      bankChangeHandler={(e) => setBank(e)}
      businessOrPersonal={businessOrPersonal}
      businessOrPersonalChangeHandler={handleRadioButtonChange}
      annualFeeValue={annualFee}
      annualFeeChangeHandler={(e) => setAnnualFee(e)}
      rewardTypesValue={rewardTypes}
      handlePercentChange={handleRewardTypePercentChange}
      handleRankChange={handleRewardTypeRankChange}
      cardImageUrl={cardImage}
      cardImageChangeHandler={setCardImage}
    />
    </>
  );
}
