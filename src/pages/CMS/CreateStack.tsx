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
  const cardReducer = useSelector((state) => state.card);
  const dispatch = useDispatch();

  return (
    <CreateStackLayout>
      <Header>
        <h2>Create stack testing page</h2>
      </Header>

      <PreviewAndCardDisplayContainer>
        <StackPreview>this is the stack preview</StackPreview>

        <CardsDisplay>
          <h2>Cards</h2>
          {!isLoaded(cards)
            ? 'Loading cards'
            : isEmpty(cards)
            ? 'There are no cards'
            : cards.map((card: CardProps) => <CardDisplayItem card={card} />)}
        </CardsDisplay>
      </PreviewAndCardDisplayContainer>
    </CreateStackLayout>
  );
}
