import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, filter, find, map } from 'rxjs/operators';
import * as faker from 'faker';

import { Ingredient, Recipe, Step, Tag, TagColor, User } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  colors = ['Blue', 'Orange', 'Red', 'Green', 'Black', 'Gray', 'Yellow'];

  constructor() { }

  // MOCK RECIPE DATA
  private recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  getLocalRecipeValue = (): Recipe[] => this.recipes$.getValue();
  getLocalRecipe$ = (): Observable<Recipe[]> => this.recipes$.asObservable();
  storeLocalRecipes = (next: Recipe[]) => this.recipes$.next(this.getLocalRecipeValue().concat(next));

  getRecipes(length: number)  {
    if (!this.getLocalRecipeValue().length) {
      const recipes: Recipe[] = [];
      for (let i = 0; i < length; i++) {
        recipes.push(this.generateRecipe());
      }
      this.storeLocalRecipes(recipes);
    }
    return this.getLocalRecipe$().pipe(map((res: Recipe[]) => res));
  }

  getRecipeById(recipeId: string) {
    return this.getLocalRecipe$().pipe(
      map((res: Recipe[]) => {
        const recipe = res.find(recipes => recipes.id === recipeId);
        if (!recipe) { throw new Error('Cannot find the current recipe!'); }
        return recipe;
      })
    );
  }

  // HELPER FUNC
  generateRecipe(): Recipe {
    const cookTime = faker.random.number({ min: 5, max: 120 });
    const prepTime = faker.random.number({ min: 5, max: 120 });
    const user = this.generateUser();
    return {
      id: faker.random.uuid(),
      name: faker.lorem.words(faker.random.number({ min: 1, max: 5 })),
      description: faker.lorem.paragraphs(1, '.'),
      image: faker.image.food(faker.random.number({ min: 350, max: 600 }), faker.random.number({ min: 350, max: 600 })),
      tags: this.generateTag(faker.random.number({ min: 1, max: 3 })),

      cookTime,
      prepTime,
      readyTime: cookTime + prepTime,

      createdOn: faker.date.recent(20),
      updatedOn: faker.date.recent(15),

      numberLiked: faker.random.number({ min: 1, max: 500 }),
      numberTried: faker.random.number({ min: 1, max: 500 }),

      ingredients: this.generateIngredien(faker.random.number({ min: 3, max: 8 })),
      steps: this.generateStep(faker.random.number({ min: 3, max: 8 })),

      userId: user.id,
      user,
      isPublic: false,
    };
  }

  generateUser(): User {
    return {
      id: faker.random.uuid(),
      email: faker.internet.email(),
      userName: faker.internet.userName(),
      name: faker.name.findName(),
      image: faker.image.people(),
      createdOn: faker.date.recent(100),
      totalPost: 0,
    };
  }

  generateTag(length: number): Tag[] {
    const tags: Tag[] = [];
    for (let i = 0; i < length; i++) {
      tags.push({ name: faker.lorem.word(), color: TagColor[this.colors[faker.random.number({ min: 0, max: 6 })]] });
    }
    return tags;
  }

  generateIngredien(length: number): Ingredient[] {
    const ingredients: Ingredient[] = [];
    for (let i = 0; i < length; i++) {
      ingredients.push({
        name: faker.lorem.words(faker.random.number({min: 1, max: 4})),
        unit: faker.lorem.word(),
        amount: +faker.finance.amount(5, 50, 2),
        tip: faker.lorem.words(faker.random.number({min: 0, max: 8}))
      });
    }
    return ingredients;
  }

  generateStep(length: number): Step[] {
    const steps: Step[] = [];
    for (let i = 0; i < length; i++) {
      steps.push({
        index: i + 1,
        direction: faker.lorem.sentences(faker.random.number({min: 1, max: 3})),
        tip: faker.lorem.words(faker.random.number({min: 0, max: 8}))
      });
    }
    return steps;
  }
}
