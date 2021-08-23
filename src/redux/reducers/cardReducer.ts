import { CardAction, CardProps } from '../../types';
interface InitialStateInterface {
  cardMessage: string;
  existAlready: boolean;
  current: CardProps;
}

const initialState: InitialStateInterface = {
  cardMessage: '',
  existAlready: false,
  current: {
    name: '',
    bank: '',
    annualFee: 0,
    rewardTypes: {
      Travel: 0,
      Flights: 0,
      Hotels: 0,
      Dining: 0,
      Cashback: 0,
      Gas: 0,
    },
  } as CardProps,
};

export const cardReducer = (state = initialState, action: CardAction) => {
  switch (action.type) {
    case 'GET_CARD':
      return { ...state, current: action.payload };
    case 'CLEAR_CARD':
      return { ...state, current: action.payload };
    case 'ADD_CARD':
      return { ...state, cardMessage: action.payload, existAlready: false };
    case 'REMOVE_CARD':
      return { ...state, cardMessage: action.payload, existAlready: false };
    case 'EDIT_CARD':
      return { ...state, cardMessage: action.payload, existAlready: false };
    case 'CARD_ERROR':
      return { ...state, cardMessage: action.payload, existAlready: false };
    case 'CARD_EXIST':
      console.log('card exist reducer running');
      return { ...state, cardMessage: action.payload, existAlready: true };
    case 'CLEAR_CARD_MESSAGE':
      return { ...state, cardMessage: '' };
    default:
      return state;
  }
};
