export interface UserProps {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  cards: Array<CardProps>;
}

export interface CardProps {
  id?: string;
  name: string;
  bank: string;
  annualFee: number;
  rewardTypes: RewardTypeProps;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface EditedCardProps {
  id?: string;
  name?: string;
  bank?: string;
  annualFee?: number;
  rewardTypes?: RewardTypeProps;
}

export interface StackProps {
  id: string;
  title: string;
  description: string;
}

export enum AuthActionTypes {
  SIGNUP = 'SIGNUP',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SEND_EMAIL = 'SEND_EMAIL',
  AUTH_ERROR = 'AUTH_ERROR',
  CLEAR_AUTH_MESSAGE = 'CLEAR_AUTH_MESSAGE',
}

export enum CardActionTypes {
  GET_CARD = 'GET_CARD',
  CLEAR_CARD = 'CLEAR_CARD',
  ADD_CARD = 'ADD_CARD',
  REMOVE_CARD = 'REMOVE_CARD',
  EDIT_CARD = 'EDIT_CARD',
  CARD_EXIST = 'CARD_EXIST',
  CARD_ERROR = 'CARD_ERROR',
}

export enum StackActionTypes {
  GET_STACK = 'GET_STACK',
  GET_ALL_STACKS = 'GET_ALL_STACKS',
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
interface ClearAuthMessageAction {
  type: typeof AuthActionTypes.CLEAR_AUTH_MESSAGE;
}

/**
 *
 * CARD REDUCER INTERFACES
 *
 */
interface GetCardAction {
  type: typeof CardActionTypes.GET_CARD;
  payload: CardProps;
}
interface ClearCardAction {
  type: typeof CardActionTypes.CLEAR_CARD;
  payload: CardProps;
}
interface AddCardAction {
  type: typeof CardActionTypes.ADD_CARD;
  payload: string;
}
interface RemoveCardAction {
  type: typeof CardActionTypes.REMOVE_CARD;
  payload: string;
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

/**
 *
 * STACK REDUCER INTERFACES
 *
 */
interface GetAllStacksAction {
  type: typeof StackActionTypes.GET_ALL_STACKS;
  payload: Array<StackProps>;
}
interface GetStackAction {
  type: typeof StackActionTypes.GET_STACK;
  payload: StackProps;
}

export type AuthAction =
  | SignupAction
  | LoginAction
  | LogoutAction
  | SendEmailAction
  | AuthErrorAction
  | ClearAuthMessageAction;

export type CardAction =
  | GetCardAction
  | ClearCardAction
  | AddCardAction
  | RemoveCardAction
  | EditCardAction
  | CardExistAction
  | CardErrorAction;

export type StackAction = GetAllStacksAction | GetStackAction;

/**===========================================================
 *
 *
 *          GENERAL TYPES / INTERFACES / ENUMS
 *
 *
 *==========================================================*/
export interface RewardTypeProps {
  Travel: number;
  Flights: number;
  Hotels: number;
  Dining: number;
  Cashback: number;
  Gas: number;
}
