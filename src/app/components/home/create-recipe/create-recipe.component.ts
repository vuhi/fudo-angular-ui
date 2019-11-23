import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent, MatDialog } from '@angular/material';

import { faBookmark, faHandPointUp, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LIMITED_TAG, URL_PATTERN } from '../../../utils/app-constant';
import { Direction, Ingredient, ModalData, ModalMode, Recipe, Tag, TagColor } from '../../../models';
import { COLORS } from '../../../models/tag.model';
import * as faker from 'faker';

import { IngredientModalComponent } from './ingredient-modal/ingredient-modal.component';
import { DirectionModalComponent } from './direction-modal/direction-modal.component';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  LIMITED_TAG = LIMITED_TAG;
  INGREDIENT_MODAL = 'ingredients';
  DIRECTION_MODAL = 'directions';
  EDIT = ModalMode.Edit;
  CREATE = ModalMode.Create;

  faUtensils = faUtensils;
  faBookmark = faBookmark;
  faHandPointUp = faHandPointUp;

  tagList: Tag[] = [];
  ingredientList: Ingredient[] = [];
  directionList: Direction[] = [];
  invisible = false;
  removable = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  recipeForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initForm();
    this.getEl('name').valueChanges.subscribe(res => console.log(res));
  }

  getEl = (formElName: string, errorName = null) => errorName ? this.recipeForm.get(formElName).errors[errorName] : this.recipeForm.get(formElName);
  isInvalid = (formElName: string) => this.getEl(formElName).invalid && (this.getEl(formElName).dirty || this.getEl(formElName).touched);

  initForm(recipe: Recipe = null) {
    this.recipeForm = this.fb.group({
      id: null,
      name: this.fb.control('', [Validators.required, Validators.maxLength(120)]),
      image: this.fb.control('', [Validators.required, Validators.maxLength(250), Validators.pattern(URL_PATTERN)]),
      description: this.fb.control('', [Validators.required, Validators.maxLength(500)]),
      tags: this.fb.control(this.tagList, [Validators.required]),
      prepTime: this.fb.control('', [Validators.required, Validators.max(999999999), Validators.min(0)]),
      cookTime: this.fb.control('', [Validators.required, Validators.max(999999999), Validators.min(0)]),
      readyTime: this.fb.control({value: 0, disabled: true}),
      ingredients: this.fb.control(this.ingredientList, [Validators.required]),
      directions: this.fb.control(this.directionList, [Validators.required])
    });
  }

  updateReadyTime() {
    this.getEl('readyTime').setValue(
      this.getEl('prepTime').value + this.getEl('cookTime').value
    );
  }

  addTag(event: MatChipInputEvent): void {
    const value = event.value;
    if (value && value.trim() && this.tagList.length <= this.LIMITED_TAG && !this.tagList.some(tag => tag.name === value.trim())) {
      this.tagList.push({name: value.trim(), color: TagColor[COLORS[faker.random.number({ min: 0, max: 6 })]]});
      this.getEl('tags').setValue(this.tagList);
      this.getEl('tags').markAsDirty();
      event.input.value = '';
      this.invisible = this.tagList.length >= LIMITED_TAG;
    }
  }

  removeTag(tag: Tag): void {
    const index = this.tagList.indexOf(tag);
    if (index >= 0) { this.tagList.splice(index, 1); }
    this.getEl('tags').setValue(this.tagList);
    this.getEl('tags').markAsDirty();
    this.invisible = this.tagList.length >= LIMITED_TAG;
  }

  saveRecipe() {
    console.log(this.recipeForm.getRawValue());
  }

  cancel() {
    console.log(this.recipeForm.getRawValue());
  }

  showModal(name: string, index: number, mode: ModalMode) {
    const modal = this.dialog.open(
      name === this.INGREDIENT_MODAL ? IngredientModalComponent : DirectionModalComponent, {
      width: '60%',
      minWidth: '500px',
      data: { index, name, mode }
    });

    modal.afterClosed().subscribe((result: ModalData<any>| undefined) => {
      console.log('The dialog was closed', result);
      if (result) {
        result.name === this.INGREDIENT_MODAL ?
          this.handleIngredienData(result.value, result.mode) :  this.handleDirectionData(result.value, result.mode);
      }
    });
  }

  handleIngredienData(ingredient: Ingredient, mode: ModalMode) {
    switch (mode) {
      case ModalMode.Create: {
        this.ingredientList.push(ingredient);
        break;
      }
      case ModalMode.Edit: {
        const index = this.ingredientList.findIndex(x => x.index === ingredient.index);
        if (index) { this.ingredientList[index] = ingredient; } else { throw new Error('Cannot find ingredient index'); }
        break;
      }
      default: return;
    }
    this.getEl(this.INGREDIENT_MODAL).setValue(this.ingredientList);
  }

  handleDirectionData(direction: Direction, mode: ModalMode) {}
}
