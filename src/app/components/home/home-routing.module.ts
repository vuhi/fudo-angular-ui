import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';


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
