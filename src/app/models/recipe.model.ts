import { Tag } from './tag.model';
import { User } from './user.model';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface Recipe {
  _id?: string;
  name: string;
  createdBy?: User;
  createdOn: Date;
  updatedBy?: User;
  updatedOn?: Date;
  numberTried: number;
  numberLiked: number;
  image: string;
  description: string;
  level: string;
  calorie: string;
  numServing: number;
  prepTime: number;
  cookTime: number;
  readyTime: number;
  tags: Tag[];
  ingredients: Ingredient[];
  directions: Direction[];
  isPublic: boolean;
}

export interface Ingredient {
  index: number;
  name: string;
  unit: string;
  amount: string;
  tip?: string;
  isOpen?: boolean;
  isCheck?: boolean
}

export interface Direction {
  index: number;
  direction: string;
  tip?: string;
  isOpen?: boolean;
}
