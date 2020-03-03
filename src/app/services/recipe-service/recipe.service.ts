import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, filter, find, map } from 'rxjs/operators';
import * as faker from 'faker';

import {Ingredient, Recipe, Direction, Tag, TagColor, User, Res} from '../../models';
// import { COLORS } from '../../models/tag.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  private recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  getLocalRecipeValue = (): Recipe[] => this.recipes$.getValue();
  getLocalRecipe$ = (): Observable<Recipe[]> => this.recipes$.asObservable();
  storeLocalRecipes = (next: Recipe[]) => this.recipes$.next(this.getLocalRecipeValue().concat(next));

  getRecipes(page: number, limit: number)  {
    // if (!this.getLocalRecipeValue().length) {
    //   const recipes: Recipe[] = [];
    //   for (let i = 0; i < length; i++) {
    //     recipes.push(this.generateRecipe());
    //   }
    //   this.storeLocalRecipes(recipes);
    // }
    // return this.getLocalRecipe$().pipe(map((res: Recipe[]) => res));
    return this.http.get(
      `${environment.API_URL}/recipes/all`,
      { params: new HttpParams().set('page', page.toString()).set('limit', limit.toString())}
      ).pipe(map((res: Res<Recipe[]>) => res.data));
  }

  getRecipeById(recipeId: string) {
    // return this.getLocalRecipe$().pipe(
    //   map((res: Recipe[]) => {
    //     const recipe = res.find(recipes => recipes.id === recipeId);
    //     if (!recipe) { throw new Error('Cannot find the current recipe!'); }
    //     recipe.directions.forEach(direction => direction.isOpen = false);
    //     recipe.ingredients.forEach(direction => direction.isOpen = false);
    //     return recipe;
    //   }),
    // );
    return this.http.get(`${environment.API_URL}/recipes/${recipeId}`)
      .pipe(map((res: Res<Recipe>) => res.data ));
  }

  // HELPER FUNC
  // generateRecipe(): Recipe {
  //   const cookTime = faker.random.number({ min: 5, max: 120 });
  //   const prepTime = faker.random.number({ min: 5, max: 120 });
  //   const user = this.generateUser();
  //   return {
  //     id: faker.random.uuid(),
  //     name: faker.lorem.words(faker.random.number({ min: 1, max: 5 })),
  //     description: faker.lorem.paragraphs(1, '.'),
  //     image: faker.image.food(faker.random.number({ min: 350, max: 600 }), faker.random.number({ min: 350, max: 600 })),
  //     tags: this.generateTag(faker.random.number({ min: 1, max: 3 })),
  //
  //     cookTime,
  //     prepTime,
  //     readyTime: cookTime + prepTime,
  //
  //     createdOn: faker.date.recent(20),
  //     updatedOn: faker.date.recent(15),
  //
  //     numberLiked: faker.random.number({ min: 1, max: 500 }),
  //     numberTried: faker.random.number({ min: 1, max: 500 }),
  //
  //     ingredients: this.generateIngredien(faker.random.number({ min: 3, max: 8 })),
  //     directions: this.generateDirection(faker.random.number({ min: 3, max: 8 })),
  //
  //     userId: user.id,
  //     user,
  //     isPublic: false,
  //   };
  // }
  //
  // generateUser(): User {
  //   return {
  //     id: faker.random.uuid(),
  //     email: faker.internet.email(),
  //     userName: faker.internet.userName(),
  //     name: faker.name.findName(),
  //     image: faker.image.people(),
  //     createdOn: faker.date.recent(100),
  //     totalPost: 0,
  //   };
  // }
  //
  // generateTag(length: number): Tag[] {
  //   const tags: Tag[] = [];
  //   for (let i = 0; i < length; i++) {
  //     tags.push({ name: faker.lorem.word(), color: TagColor[COLORS[faker.random.number({ min: 0, max: 6 })]] });
  //   }
  //   return tags;
  // }
  //
  // generateIngredien(length: number): Ingredient[] {
  //   const ingredients: Ingredient[] = [];
  //   for (let i = 0; i < length; i++) {
  //     ingredients.push({
  //       index: i,
  //       name: faker.lorem.words(faker.random.number({min: 1, max: 4})),
  //       unit: faker.lorem.word(),
  //       amount: faker.finance.amount(5, 50, 2),
  //       tip: faker.lorem.words(faker.random.number({min: 0, max: 8}))
  //     });
  //   }
  //   return ingredients;
  // }
  //
  // generateDirection(length: number): Direction[] {
  //   const directions: Direction[] = [];
  //   for (let i = 0; i < length; i++) {
  //     directions.push({
  //       index: i + 1,
  //       direction: faker.lorem.sentences(faker.random.number({min: 1, max: 3})),
  //       tip: faker.lorem.words(faker.random.number({min: 0, max: 8}))
  //     });
  //   }
  //   return directions;
  // }
}
