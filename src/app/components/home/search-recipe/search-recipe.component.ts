import {Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit {

  @ViewChild('recipeGrid', { static: true }) recipeGrid: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
}
