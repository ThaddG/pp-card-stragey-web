import React from 'react'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Paper from '@material-ui/core/Paper';

// custom components
import CardListItem from '../../components/CMS/CardListItem';
import BackButton from '../../components/BackButton';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { clearCardMessage } from '../../redux/actions/cardActions';

// types
import { CardProps } from '../../types';

export default function AddStack() {
  useFirestoreConnect([{ collection: 'cards' }]);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.firestore.ordered.cards);
  const cardReducer = useSelector((state) => state.card);

  React.useEffect(() => {
    dispatch(clearCardMessage());
  }, []);

  return (
    <div>
      {
        isLoaded(cards) // if it's loaded
          ? isEmpty(cards) // if it's loaded and the database is empty
            ? <p>There are no cards</p>
            : cards.map((card: CardProps) => (
              <Paper elevation={6} style={{margin: '10px 10px', padding: "20px 10px"}}>
                
                {card.name}
              </Paper>
            )) // if it's loaded and the database is not empty
          : <p>Loading...</p> // if it's not yet loaded (waiting for data)
      }
    </div>
  )
}
