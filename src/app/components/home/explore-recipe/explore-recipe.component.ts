import {Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { RecipeService } from '../../../services';
import { Recipe } from '../../../models';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './explore-recipe.component.html',
  styleUrls: ['./explore-recipe.component.scss']
})
export class ExploreRecipeComponent implements OnInit {

  @ViewChild('recipeGrid', { static: true }) recipeGrid: ElementRef;
  recipes: Recipe[] = [];
  private  MIN_NUM = 15;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes(1, this.MIN_NUM).subscribe(
      res => this.recipes = res,
      err => { throw err; }
    );
  }
}