export interface UserProps {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  cards: Array<CardProps>;
}

export interface CardProps {
  id: string;
  cardHolderName: string;
  cardName: string;
  cardNumber: string;
  cvv: string;
  rewards: string[];
  expireDate: Date;
  zipcode: number;
  createdAt: Date;
  updatedAt: Date;
  lastFourDigits: number;
}

export enum AuthActionTypes {
  SIGNUP = 'SIGNUP',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SEND_EMAIL = 'SEND_EMAIL',
  AUTH_ERROR = 'AUTH_ERROR',
}

export enum CardActionTypes {
  ADD_CARD = 'ADD_CARD',
  REMOVE_CARD = 'REMOVE_CARD',
  EDIT_CARD = 'EDIT_CARD',
  CARD_EXIST = 'CARD_EXIST',
  CARD_ERROR = 'CARD_ERROR',
}

/**
 *
 * AUTH REDUCER INTERFACES
 *
 */
interface SignupAction {
  type: typeof AuthActionTypes.SIGNUP;
}
interface LoginAction {
  type: typeof AuthActionTypes.LOGIN;
}
interface LogoutAction {
  type: typeof AuthActionTypes.LOGOUT;
}
interface SendEmailAction {
  type: typeof AuthActionTypes.SEND_EMAIL;
  payload: string;
}
interface AuthErrorAction {
  type: typeof AuthActionTypes.AUTH_ERROR;
  payload: string;
}

/**
 *
 * CARD REDUCER INTERFACES
 *
 */
interface AddCardAction {
  type: typeof CardActionTypes.ADD_CARD;
}
interface RemoveCardAction {
  type: typeof CardActionTypes.REMOVE_CARD;
}
interface EditCardAction {
  type: typeof CardActionTypes.EDIT_CARD;
}
interface CardExistAction {
  type: typeof CardActionTypes.CARD_EXIST;
  payload: string;
}
interface CardErrorAction {
  type: typeof CardActionTypes.CARD_ERROR;
  payload: string;
}

export type AuthAction =
  | SignupAction
  | LoginAction
  | LogoutAction
  | SendEmailAction
  | AuthErrorAction;

export type CardAction =
  | AddCardAction
  | RemoveCardAction
  | EditCardAction
  | CardExistAction
  | CardErrorAction;
