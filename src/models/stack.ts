import { CardProps } from '../types';

export interface StackOwnerProps {
  id: string;
  username: string;
}
export default interface StackProps {
  id?: string;
  title: string;
  description: string;
  owner: StackOwnerProps;
  cards: CardProps[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EditedStackProps {
  id?: string;
  title?: string;
  description?: string;
  owner?: StackOwnerProps;
  cards?: CardProps[];
  createdAt?: Date;
  updatedAt?: Date;
}

export enum StackActionTypes {
  GET_STACK = 'GET_STACK',
  GET_ALL_STACKS = 'GET_ALL_STACKS',
  STACK_ERROR = 'STACK_ERROR',
  CLEAR_STACK_MESSAGE = 'CLEAR_STACK_MESSAGE',
  ADD_CARD_TO_STACK = 'ADD_CARD_TO_STACK',
  REMOVE_CARD_FROM_STACK = 'REMOVE_CARD_FROM_STACK',
  ADD_STACK = 'ADD_STACK',
  CLEAR_STACK = 'CLEAR_STACK',
  EDIT_STACK = 'EDIT_STACK'
}

interface GetAllStacksAction {
  type: typeof StackActionTypes.GET_ALL_STACKS;
  payload: Array<StackProps>;
}
interface GetStackAction {
  type: typeof StackActionTypes.GET_STACK;
  payload: StackProps;
}
interface StackErrorAction {
  type: typeof StackActionTypes.STACK_ERROR;
  payload: string;
}
interface AddCardToStackAction {
  type: typeof StackActionTypes.ADD_CARD_TO_STACK,
  payload: CardProps
}
interface RemoveCardFromStackAction {
  type: typeof StackActionTypes.REMOVE_CARD_FROM_STACK,
  payload: CardProps
}
interface AddStackAction {
  type: typeof StackActionTypes.ADD_STACK,
  payload: StackProps
}
interface ClearStackAction {
  type: typeof StackActionTypes.CLEAR_STACK,
}
interface EditStackAction {
  type: typeof StackActionTypes.EDIT_STACK,
  payload: string;
}

export type StackAction =
  | GetAllStacksAction
  | GetStackAction
  | StackErrorAction
  | AddCardToStackAction
  | RemoveCardFromStackAction
  | AddStackAction
  | ClearStackAction
  | EditStackAction;