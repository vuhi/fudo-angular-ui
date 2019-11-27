import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, filter, find, map } from 'rxjs/operators';
import * as faker from 'faker';

import { Ingredient, Recipe, Direction, Tag, TagColor, User } from '../../models';
import { COLORS } from '../../models/tag.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  // MOCK RECIPE DATA
  private recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  getLocalRecipeValue = (): Recipe[] => this.recipes$.getValue();
  getLocalRecipe$ = (): Observable<Recipe[]> => this.recipes$.asObservable();
  storeLocalRecipes = (next: Recipe[]) => this.recipes$.next(this.getLocalRecipeValue().concat(next));

  getRecipes(length: number)  {
    const firstRecipe =  [
      {
        id: "12789847",
        name: "Terell's Tacos",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/ground-beef-tacos-2.jpg",
        description: "good tacos",
        tags: [{name:"veggie", color: TagColor.Blue}, {name:"authentic", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      },
      {
        id: "12782308",
        name: "World Famous Pizza",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://www.kitchentreaty.com/wp-content/uploads/2017/02/how-to-make-heart-shaped-pizzas-featured-660x430.jpg",
        description: "best pizza in ohio",
        tags: [{name:"new york", color: TagColor.Blue}, {name:"cute", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      },
      {
        id: "12782308",
        name: "Street Burgers",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg",
        description: "family burgers",
        tags: [{name:"yummy", color: TagColor.Blue}, {name:"carbs", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      },
      {
        id: "12782308",
        name: "Krabby Patty",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://img.cinemablend.com/filter:scale/quill/9/6/6/3/7/a/96637aabb562881adec1336c0d78acc6cc5d1403.jpg?mw=600",
        description: "Now everyone will eat at the Chum Bucket, and I will rule the world!",
        tags: [{name:"bikini bottom", color: TagColor.Blue}, {name:"secret", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      },

      {
        id: "12789847",
        name: "Spicy Chips",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPz215_t12H_G90S8BoTyC68qQSGXI_kfnz-0bDhNMNFXuHAavBQ&s",
        description: "hot chip",
        tags: [{name:"spicy", color: TagColor.Blue}, {name:"snack", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      },
      {
        id: "12782308",
        name: "Grandma's Casserole",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://www.keyingredient.com/media/6f/e3/495df56df18d5efc3a5e5fa4ab4d960dee6a.jpg/rh/grandmas-chicken-casserole.jpg",
        description: "my grandmas casserole",
        tags: [{name:"dinner", color: TagColor.Blue}, {name:"family style", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      },
      {
        id: "12782308",
        name: "Best Curry I have ever made",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://farm8.staticflickr.com/7078/26871836745_a85ae37fe1_o.jpg",
        description: "quality curry",
        tags: [{name:"college", color: TagColor.Blue}, {name:"cheap", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      },
      {
        id: "12782308",
        name: "Bologna Sandwich",
        userId: "11111",
        user: {
          userName: "tflowers",
          email: "tflowers@gmail.com",
          name: "string",
          image: "https://picsum.photos/200/200"
        },
        createdOn: new Date(),
        updatedOn: new Date(),
        numberTried: 24,
        numberLiked: 245,
        image: "https://cdn.vox-cdn.com/thumbor/urqQT_LdISam4VksIF9AhFe6rvI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7569721/bologna-sandwich-ss.0.jpeg",
        description: "josh's Bologna Sandwich",
        tags: [{name:"easy", color: TagColor.Blue}, {name:"fast", color: TagColor.Red}],
        prepTime: 12,
        cookTime: 24,
        readyTime: 36,
        ingredients: [{index: 1,name:"tomatos", unit: "pound", amount: "10",tip:"make them good"}],
        directions: [{index: 1, direction: "put all of the stuff in the taco", tip: "eat it"}],
        isPublic: true
      }
  ]
    if (!this.getLocalRecipeValue().length) {
      const recipes: Recipe[] = firstRecipe;
      // for (let i = 0; i < length; i++) {
      //   recipes.push(this.generateRecipe());
      // }
      this.storeLocalRecipes(recipes);
    }
    return this.getLocalRecipe$().pipe(map((res: Recipe[]) => res));
  }

  getRecipeById(recipeId: string) {
    return this.getLocalRecipe$().pipe(
      map((res: Recipe[]) => {
        const recipe = res.find(recipes => recipes.id === recipeId);
        if (!recipe) { throw new Error('Cannot find the current recipe!'); }
        recipe.directions.forEach(direction => direction.isOpen = false);
        recipe.ingredients.forEach(direction => direction.isOpen = false);
        return recipe;
      }),
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
      directions: this.generateDirection(faker.random.number({ min: 3, max: 8 })),

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
      tags.push({ name: faker.lorem.word(), color: TagColor[COLORS[faker.random.number({ min: 0, max: 6 })]] });
    }
    return tags;
  }

  generateIngredien(length: number): Ingredient[] {
    const ingredients: Ingredient[] = [];
    for (let i = 0; i < length; i++) {
      ingredients.push({
        index: i,
        name: faker.lorem.words(faker.random.number({min: 1, max: 4})),
        unit: faker.lorem.word(),
        amount: faker.finance.amount(5, 50, 2),
        tip: faker.lorem.words(faker.random.number({min: 0, max: 8}))
      });
    }
    return ingredients;
  }

  generateDirection(length: number): Direction[] {
    const directions: Direction[] = [];
    for (let i = 0; i < length; i++) {
      directions.push({
        index: i + 1,
        direction: faker.lorem.sentences(faker.random.number({min: 1, max: 3})),
        tip: faker.lorem.words(faker.random.number({min: 0, max: 8}))
      });
    }
    return directions;
  }
}
