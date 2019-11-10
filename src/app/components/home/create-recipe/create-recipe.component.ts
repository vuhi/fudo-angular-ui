import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent, ThemePalette } from '@angular/material';

import { faCookieBite, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { COMMA, ENTER } from '@angular/cdk/keycodes';


export interface Tag {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  faCookieBite = faCookieBite;
  faCloudUploadAlt = faCloudUploadAlt;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [
    {name: 'Cookie', color: 'accent'},
    {name: 'Vegetarian', color: 'primary'},
    {name: 'MeatLover', color: 'warn'},
  ];
  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim(), color: undefined});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
