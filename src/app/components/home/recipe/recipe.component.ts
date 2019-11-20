import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faTags, faQuestionCircle, faCheese, faFire, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

import { RecipeService } from '../../../services';
import { Recipe } from '../../../models';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  faTags = faTags;
  faFire = faFire;
  faCheese = faCheese;
  faExclamationCircle = faExclamationCircle;
  faQuestionCircle = faQuestionCircle;

  recipe: Recipe;
  userPlaceHolder = '../../../../assets/user_img_place_holder.png';
  userRecipeHolder = '../../../../assets/recipe_img_place_holder.png';
  ingredientToolTip = false;
  stepTooltip = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private toastr: ToastrService
  ) {}

  get recipeId(): string {
    return this.route.snapshot.params.recipeId;
  }

  ngOnInit() {
    this.getRecipeById(this.recipeId);
  }

  useUserPlaceHolder = (event) => event.target.src = this.userPlaceHolder;
  useRecipePlaceHolder = (event) => event.target.src = this.userRecipeHolder;

  getRecipeById(recipeId: string) {
    this.recipeService.getRecipeById(recipeId).subscribe(
      res => this.recipe = res,
      error => {
        this.toastr.warning('Redirecting to home page in 8s', 'Warning', { progressBar: true })
          .onHidden.subscribe(() => this.router.navigate(['/']));
        throw error;
      });
  }

}
