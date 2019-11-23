import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RecipeComponent } from './recipe/recipe.component';

import {
  MatButtonModule,  MatChipsModule,  MatIconModule,  MatInputModule,
  MatMenuModule,  MatToolbarModule,  MatFormFieldModule,  MatOptionModule,
  MatSelectModule, MatCardModule, MatDialogModule
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuillModule } from 'ngx-quill';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { InteractionIconComponent } from './interaction-icon/interaction-icon.component';
import { IngredientModalComponent } from './create-recipe/ingredient-modal/ingredient-modal.component';
import { DirectionModalComponent } from './create-recipe/direction-modal/direction-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    SearchRecipeComponent,
    CreateRecipeComponent,
    LoginModalComponent,
    RecipeComponent,
    InteractionIconComponent,
    IngredientModalComponent,
    DirectionModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    FontAwesomeModule,
    QuillModule,
    PopoverModule.forRoot(),

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
    MatDialogModule
  ],
  entryComponents: [
    LoginModalComponent,
    IngredientModalComponent,
    DirectionModalComponent
  ],
})
export class HomeModule { }
