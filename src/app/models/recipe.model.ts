import { Tag } from './tag.model';
import { User } from './user.model';

export interface Recipe {
  id?: string;
  name: string;
  userId: string;
  user?: User;
  createdOn: Date;
  updatedOn?: Date;
  numberTried: number;
  numberLiked: number;
  image: string;
  description: string;
  tags: Tag[];
  prepTime: number;
  cookTime: number;
  readyTime: number;
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
}

export interface Direction {
  index: number;
  direction: string;
  tip?: string;
  isOpen?: boolean;
}
