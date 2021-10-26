import React from 'react';
import { Typography } from '@material-ui/core';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// custom components
import CardListItem from '../../components/CMS/CardListItem';
import BackButton from '../../components/BackButton';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { clearCardMessage } from '../../redux/actions/cardActions';

// styles
import '../../styles/pages/CMS/CardsList.css';

// types
import { CardProps } from '../../types';

export default function CardsList() {
  useFirestoreConnect([{ collection: 'cards' }]);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.firestore.ordered.cards);
  const cardReducer = useSelector((state) => state.card);
  React.useEffect(() => {
    dispatch(clearCardMessage());
  }, []);
  return (
    <div className="cards-list-container">
      <BackButton text="Dashboard" to="/cms" />
      <Typography variant="h2">Cards List</Typography>
      {!isLoaded(cards)
        ? 'Loading cards'
        : isEmpty(cards)
        ? 'There are no cards'
        : cards.map((card: CardProps) => <CardListItem card={card} />)}
      <p style={{ fontWeight: 'bold' }}>{cardReducer.cardMessage || null}</p>
    </div>
  );
}
