import { Coffee } from '../components/CardList';

export interface OrderType extends Coffee {
  orderId: string;
  quantity: number;
  comments: string;
  sugar: Sugar;
  extraMilk: boolean;
}

export enum Sugar {
  Black = 'Black',
  Medium = 'Medium',
  Sweet = 'Sweet',
}
