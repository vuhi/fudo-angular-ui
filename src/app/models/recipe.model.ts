import { Tag } from './tag.model';

export interface Recipe {
  id?: string;
  name: string;
  description: string;
  image: string;
  tags: Tag[];
}
