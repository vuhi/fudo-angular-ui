import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { tap } from 'rxjs/operators';

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
  isLoad  = false;
  isEndContent = false;
  private MIN_NUM = 15;
  private PAGE = 1;

  options = {
    transitionDuration: '1s',
    gutter: 25,
    resize: true,
    initLayout: true,
    fitWidth: true
  };

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes(this.PAGE, this.MIN_NUM).pipe(
      tap(res => {
        this.isLoad = true;
        this.isEndContent = res.length === 0;
      }))
      .subscribe(res => {
        this.recipes.push(...res);
        this.PAGE++;
        this.isLoad = false;
      },
      err => { throw err; }
    );

  }

  onScrollDown() {
    console.log('scroll down!!');
    this.getRecipes();
  }
}
