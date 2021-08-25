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
  CLEAR_CARD_MESSAGE = 'CLEAR_CARD_MESSAGE',
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
  payload: string;
}
interface CardExistAction {
  type: typeof CardActionTypes.CARD_EXIST;
  payload: string;
}
interface CardErrorAction {
  type: typeof CardActionTypes.CARD_ERROR;
  payload: string;
}
interface ClearCardMessageAction {
  type: typeof CardActionTypes.CLEAR_CARD_MESSAGE;
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
  | CardErrorAction
  | ClearCardMessageAction;

export type StackAction = GetAllStacksAction | GetStackAction;

/**===========================================================
 *
 *
 *          GENERAL TYPES / INTERFACES / ENUMS
 *
 *
 *==========================================================*/
export interface RewardTypeAttributes {
  description: string;
  rank: number;
}
export enum RewardTypeValues {
  TRAVEL = 'Travel',
  FLIGHTS = 'Flights',
  HOTELS = 'Hotels',
  DINING = 'Dining',
  CASHBACK = 'Cashback',
  GAS = 'Gas',
  GROCERIES = 'Groceries',
}
// TODO: add groceries
export interface RewardTypeProps {
  Travel: RewardTypeAttributes
  Flights: RewardTypeAttributes
  Hotels: RewardTypeAttributes
  Dining: RewardTypeAttributes;
  Cashback: RewardTypeAttributes;
  Gas: RewardTypeAttributes;
  Groceries: RewardTypeAttributes;
}

export type RewardType =
  | RewardTypeValues.TRAVEL
  | RewardTypeValues.FLIGHTS
  | RewardTypeValues.HOTELS
  | RewardTypeValues.DINING
  | RewardTypeValues.GAS
  | RewardTypeValues.CASHBACK
  | RewardTypeValues.GROCERIES;
