import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
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
  ],
})
export class HomeModule { }
