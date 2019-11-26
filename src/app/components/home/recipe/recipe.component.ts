import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faTags, faQuestionCircle, faCheese, faFire, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

import { RecipeService } from '../../../services';
import { Recipe } from '../../../models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnDestroy {

  faTags = faTags;
  faFire = faFire;
  faCheese = faCheese;
  faExclamationCircle = faExclamationCircle;
  faQuestionCircle = faQuestionCircle;

  recipe: Recipe;
  userPlaceHolder = '../../../../assets/user_img_place_holder.png';
  userRecipeHolder = '../../../../assets/recipe_img_place_holder.png';

  unsubcribe = new Subject<void>();

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
    this.recipeService.getRecipeById(recipeId).pipe(takeUntil(this.unsubcribe))
      .subscribe(
      res => this.recipe = res,
      error => {
        this.toastr.warning('Redirecting to home page in 8s', 'Warning', { progressBar: true })
          .onHidden.pipe(takeUntil(this.unsubcribe)).subscribe(() => this.router.navigate(['/']));
        throw error;
      });
  }

  ngOnDestroy(): void {
    this.unsubcribe.next();
    this.unsubcribe.complete();
    this.toastr.clear();
  }
}
