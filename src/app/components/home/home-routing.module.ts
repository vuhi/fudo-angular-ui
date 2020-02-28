import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ExploreRecipeComponent } from './explore-recipe/explore-recipe.component';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'explore', component: ExploreRecipeComponent },
      { path: 'recipe/:recipeId', component: RecipeComponent },
      { path: 'create-recipe', component: CreateRecipeComponent },
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
