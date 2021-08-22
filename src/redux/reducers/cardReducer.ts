import { CardAction, CardProps } from '../../types';
interface InitialStateInterface {
  cardMessage: string;
  existAlready: boolean;
  current: CardProps;
}

const initialState: InitialStateInterface = {
  cardMessage: '',
  existAlready: false,
  current: {} as CardProps
};

export const cardReducer = (state = initialState, action: CardAction) => {
  switch (action.type) {
    case 'GET_CARD':
      return { ...state, current: action.payload };
    case 'ADD_CARD':
      return { ...state, cardMessage: action.payload, existAlready: false };
    case 'REMOVE_CARD':
      return { ...state, cardMessage: action.payload, existAlready: false };
    case 'EDIT_CARD':
      return { ...state, cardMessage: '', existAlready: false };
    case 'CARD_ERROR':
      return { ...state, cardMessage: action.payload, existAlready: false };
    case 'CARD_EXIST':
      console.log('card exist reducer running');
      return { ...state, cardMessage: action.payload, existAlready: true };
    default:
      return state;
  }
};
