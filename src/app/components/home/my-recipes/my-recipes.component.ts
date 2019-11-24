import {Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { RecipeService } from '../../../services';
import { Recipe } from '../../../models';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  @ViewChild('recipeGrid', { static: true }) recipeGrid: ElementRef;
  recipes: Recipe[] = [];
  private  MIN_NUM = 15;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes(this.MIN_NUM).subscribe(
      res => this.recipes = res,
      err => { throw err; }
    );
  }
}
