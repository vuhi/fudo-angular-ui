import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faClipboard, faClipboardCheck, faQuestionCircle,
  faThumbsUp, faFireAlt, faFire, faExclamationCircle,
  faUtensils, faChartBar } from '@fortawesome/free-solid-svg-icons';

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
export class RecipeComponent implements OnInit,OnDestroy {

  faUtensils = faUtensils;
  faClipboard = faClipboard;
  faClipboardCheck = faClipboardCheck;
  faFire = faFire;
  faFireAlt = faFireAlt;
  faChartBar = faChartBar;
  faThumbsUp = faThumbsUp;
  faExclamationCircle = faExclamationCircle;
  faQuestionCircle = faQuestionCircle;

  recipe: Recipe;
  userPlaceHolder = '../../../../assets/user_img_place_holder.png';
  userRecipeHolder = '../../../../assets/recipe_img_place_holder.png';

  isTagCheck = false;

  unsubscribe = new Subject<void>();

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
    this.recipeService.getRecipeById(recipeId).pipe(takeUntil(this.unsubscribe)).subscribe(
      res => { this.recipe = res; console.log(res); },
      error => {
        this.toastr.warning('Redirecting to home page in 8s', 'Warning', { progressBar: true })
          .onHidden.pipe(takeUntil(this.unsubscribe)).subscribe(() => this.router.navigate(['/', 'home', 'explore']));
        throw error;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.toastr.clear();
  }
}
