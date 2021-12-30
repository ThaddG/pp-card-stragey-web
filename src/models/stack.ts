import { CardProps } from '../types';

export default interface StackProps {
  id?: string;
  title: string;
  description: string;
  owner: StackOwnerProps;
  cards: CardProps[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface StackOwnerProps {
  id: string;
  username: string;
}
