import { StackAction, StackProps } from '../../types';
export {};

interface InitialStateInterface {
  all: Array<StackProps>;
  current: StackProps;
}

const initialState: InitialStateInterface = {
  all: [],
  current: {
    id: '',
    title: '',
    description: '',
    cards: [],
    owner: {
      id: '',
      username: ''
    }
  }
};

export const stackReducer = (state = initialState, action: StackAction) => {
  switch (action.type) {
    case 'GET_ALL_STACKS':
      return { ...state, all: action.payload };
    case 'GET_STACK':
      return { ...state, ...action.payload };
    case 'STACK_ERROR':
      return { ...state, stackError: action.payload };
    case 'ADD_CARD_TO_STACK':
      const cardToAdd = action.payload;
      const stackList = [...state.current.cards, cardToAdd];
      return { ...state, current: { ...state.current, cards: stackList } };
    case 'REMOVE_CARD_FROM_STACK':
      const cardToRemove = action.payload;
      const index = state.current.cards.indexOf(cardToRemove);
      if (index > -1) state.current.cards.splice(index, 1);
      return state;
    default:
      return state;
  }
};
