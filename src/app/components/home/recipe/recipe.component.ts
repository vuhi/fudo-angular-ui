import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faTags, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  faTags = faTags;
  faQuestionCircle = faQuestionCircle;
  constructor(private route: ActivatedRoute) {}

  get recipeId(): string {
    return this.route.snapshot.params.recipeId;
  }

  ngOnInit() {
  }

}
