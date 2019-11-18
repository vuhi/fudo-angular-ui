import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';

import {
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatOptionModule, MatSelectModule, MatCardModule, MatDialogModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { QuillModule } from 'ngx-quill';
import { LoginModalComponent } from './login-modal/login-modal.component';
import {FormsModule} from '@angular/forms';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    SearchRecipeComponent,
    CreateRecipeComponent,
    LoginModalComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    QuillModule,

    MatToolbarModule,
    MatInputModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
  ],
  entryComponents: [
    LoginModalComponent,
  ],
})
export class HomeModule { }
