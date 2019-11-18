import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as faker from 'faker';

import { Recipe, Tag, TagColor } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  colors = ['Blue', 'Orange', 'Red', 'Green', 'Black', 'Gray', 'Yellow'];
  constructor() { }

  getRecipes(length: number)  {
    const recipes: Recipe[] = [];
    for (let i = 0; i < length; i++) {
      recipes.push(this.generateRecipe());
    }
    return of(recipes).pipe(map((res: Recipe[]) => res));
  }

  // HELPER FUNC
  generateRecipe(): Recipe {
    return {
      id: faker.random.uuid(),
      name: faker.lorem.words(faker.random.number({ min: 1, max: 5 })),
      description: faker.lorem.paragraphs(1, '.'),
      image: faker.image.food(faker.random.number({ min: 350, max: 600 }), faker.random.number({ min: 350, max: 600 })),
      tags: this.generateTag(faker.random.number({ min: 1, max: 3 }))
    };
  }


  generateTag(length: number): Tag[] {
    const tags: Tag[] = [];
    for (let i = 0; i < length; i++) {
      tags.push({ name: faker.lorem.word(), color: TagColor[this.colors[faker.random.number({ min: 0, max: 6 })]] });
    }
    return tags;
  }
}
