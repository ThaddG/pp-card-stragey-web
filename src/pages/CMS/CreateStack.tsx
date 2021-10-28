import React from 'react';
import { useStore } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// custom components
import CardDisplayItem from '../../components/CMS/CardDisplayItem';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { addCardToStack } from '../../redux/actions/stackActions';

// types
import { CardProps } from '../../types';

// styles
import {
  CreateStackLayout,
  Header,
  PreviewAndCardDisplayContainer,
  StackPreview,
  CardsDisplay,
} from '../../styles/pages/CMS/CreateStackStyles';

export default function CreateStack() {
  useFirestoreConnect([{ collection: 'cards' }]);
  const cards = useSelector((state) => state.firestore.ordered.cards);

  const dispatch = useDispatch();
  const cardReducer = useSelector((state) => state.card);
  const { current } = useSelector((state) => state.stack);

  function addToStack(card: CardProps) {
    dispatch(addCardToStack(card));
  }
  function removeFromStack(card: CardProps) {

  }

  return (
    <CreateStackLayout>
      <Header>
        Create stack testing page
      </Header>

      <PreviewAndCardDisplayContainer>
        <StackPreview>this is the stack preview
          {current.cards.map((card: CardProps) => (
            <div key={card.id}>{card.name}</div>
          ))}
        </StackPreview>
        <CardsDisplay>
          <h2>Cards</h2>
          {!isLoaded(cards)
            ? 'Loading cards'
            : isEmpty(cards)
            ? 'There are no cards'
            : cards.map((card: CardProps) => (
                <CardDisplayItem
                  key={card.id}
                  card={card}
                  click={
                    current.cards.includes(card)
                    ? () => removeFromStack(card)
                    : () => addToStack(card)
                  }
                  isInStack={current.cards.includes(card)}
                />
              ))}
        </CardsDisplay>
      </PreviewAndCardDisplayContainer>
    </CreateStackLayout>
  );
}
