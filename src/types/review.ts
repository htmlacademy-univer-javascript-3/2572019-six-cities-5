import {UserData} from './user-data.ts';

export type Review = {
  id: string;
  date: string;
  user: UserData;
  comment: string;
  rating: number;
}

export type Reviews = Review[];
