import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {MyRecipesComponent} from './my-recipes/my-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-recipe',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'search-recipe', component: SearchRecipeComponent },
      { path: 'recipe/:recipeId', component: RecipeComponent },
      { path: 'create-recipe', component: CreateRecipeComponent },
      { path: 'my-recipes', component: MyRecipesComponent },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
