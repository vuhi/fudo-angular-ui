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
  steps: Step[];
  isPublic: boolean;
}

export interface Ingredient {
  name: string;
  unit: string;
  amount: number;
  tip?: string;
}

export interface Step {
  index: number;
  direction: string;
  tip?: string;
}
