import { CardAction, CardActionTypes } from '../../types';
interface InitialStateInterface {
  cardMessage: string;
  existAlready: boolean;
}

const initialState: InitialStateInterface = {
  cardMessage: '',
  existAlready: false,
};

export const cardReducer = (state = initialState, action: CardAction) => {
  switch (action.type) {
    case 'ADD_CARD':
      return { ...state, cardMessage: '', existAlready: false };
    case 'REMOVE_CARD':
      return { ...state, cardMessage: '', existAlready: false };
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
