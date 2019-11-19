import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faTags, faQuestionCircle, faCheese, faFire, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

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

  panelOpenState = false;
  tip = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
    ipsum dolor sit amet,
    consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`;
  constructor(private route: ActivatedRoute) {}

  get recipeId(): string {
    return this.route.snapshot.params.recipeId;
  }

  ngOnInit() {
  }

}
