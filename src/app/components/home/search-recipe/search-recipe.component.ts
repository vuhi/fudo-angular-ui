import {Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { RecipeService } from '../../../services';
import { Recipe } from '../../../models';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit {

  @ViewChild('recipeGrid', { static: true }) recipeGrid: ElementRef;
  recipes: Recipe[] = [];
  private  MIN_NUM = 15;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes(this.MIN_NUM).subscribe(
      res => { this.recipes = res; console.log(this.recipes) },
      err => { throw err; }
    );
  }
}
