import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent, MatDialog } from '@angular/material';

import { faBookmark, faHandPointUp, faUtensils, faHashtag,
  faAngleDoubleLeft, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LIMITED_TAG, URL_PATTERN } from '../../../utils/app-constant';
import { Direction, Ingredient, ModalData, Mode, Recipe, Tag, TagColor } from '../../../models';
import { COLORS } from '../../../models/tag.model';
import * as faker from 'faker';

import { IngredientModalComponent } from './ingredient-modal/ingredient-modal.component';
import { DirectionModalComponent } from './direction-modal/direction-modal.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/* tslint:disable:one-line */
@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly LIMITED_TAG = LIMITED_TAG;
  readonly INGREDIENT = 'Ingredient';
  readonly DIRECTION = 'Direction';
  readonly EDIT = Mode.Edit;
  readonly CREATE = Mode.Create;

  readonly faUtensils = faUtensils;
  readonly faBookmark = faBookmark;
  readonly faHandPointUp = faHandPointUp;
  readonly faHashtag = faHashtag;
  readonly faAngleDoubleLeft = faAngleDoubleLeft;
  readonly faTrashAlt = faTrashAlt;
  readonly faPencilAlt = faPencilAlt;

  tagList: Tag[] = [];
  ingredientList: Ingredient[] = [
    { index: 1, name: 'ingredient 1', amount: '1/2', unit: 'kg', tip: 'here is some tips' },
    { index: 2, name: 'ingredient 2', amount: '2/2', unit: 'kg', tip: 'here is some tips' },
    { index: 3, name: 'ingredient 3', amount: '3/2', unit: 'kg', tip: 'here is some tips' },
    { index: 4, name: 'ingredient 4', amount: '4/2', unit: 'kg', tip: 'here is some tips' }
  ];
  directionList: Direction[] = [
    { index: 1, direction: 'direction direction direction direction direction 1', tip: 'here is some tips' },
    { index: 2, direction: 'direction direction direction direction direction direction 2', tip: 'here is some tips' },
    { index: 3, direction: 'direction direction direction direction direction direction 3', tip: 'here is some tips' },
    { index: 4, direction: 'direction direction direction direction direction direction 4', tip: 'here is some tips' },
    { index: 5, direction: 'direction direction direction direction direction direction 5 direction direction direction direction direction direction 5', tip: 'here is some tips' }
  ];
  recipeForm: FormGroup;

  invisible = false;
  removable = true;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit() { this.initForm(); }

  get ingredients() { return this.recipeForm.get('ingredients'); }
  get directions() { return this.recipeForm.get('directions'); }

  getEl = (formElName: string, errorName = null) => errorName ? this.recipeForm.get(formElName).errors[errorName] : this.recipeForm.get(formElName);
  isInvalid = (formElName: string) => this.getEl(formElName).invalid && (this.getEl(formElName).dirty || this.getEl(formElName).touched);
  getType = (obj: Ingredient | Direction) => {
    if ((obj as Ingredient).unit !== undefined && (obj as Ingredient).amount !== undefined) { return this.INGREDIENT; }
    if ((obj as Direction).direction !== undefined) { return this.DIRECTION; }
    throw new Error(`Incorrect type, was not either '${this.INGREDIENT}' or '${this.DIRECTION}'`);
  }

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

  updateReadyTime = () => this.getEl('readyTime').setValue(
    this.getEl('prepTime').value + this.getEl('cookTime').value
  );

  addTag(event: MatChipInputEvent): void {
    const value = event.value;
    this.getEl('tags').markAsDirty();
    this.getEl('tags').markAsTouched();
    if (value && value.trim() && this.tagList.length <= this.LIMITED_TAG && !this.tagList.some(tag => tag.name === value.trim())) {
      this.tagList.push({name: value.trim(), color: TagColor[COLORS[faker.random.number({ min: 0, max: 6 })]]});
      this.getEl('tags').setValue(this.tagList);
      event.input.value = '';
      this.invisible = this.tagList.length >= LIMITED_TAG;
    }
  }

  removeTag(tag: Tag): void {
    const index = this.tagList.indexOf(tag);
    if (index >= 0) { this.tagList.splice(index, 1); }
    this.getEl('tags').setValue(this.tagList);
    this.invisible = this.tagList.length >= LIMITED_TAG;
  }

  saveRecipe() {
    console.log(this.recipeForm.getRawValue());
  }

  cancel() {
    console.log(this.recipeForm.getRawValue());
  }

  flipIcon(icon: FaIconComponent): void {
    icon.flip = icon.flip === 'horizontal' ? null : 'horizontal';
    icon.render();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.directionList, event.previousIndex, event.currentIndex);
    this.reOrderIndex('directionList');
    this.directions.setValue(this.directionList);
  }

  // EDIT + CREATE
  showModal(name: string, index: number, mode: Mode, data: Ingredient | Direction = null) {
    const config = {
      width: '60%', minWidth: '500px', panelClass: 'modalComeIn', autoFocus: false,
      data: { index, name, mode, value: data }
    };

    const modal = name === this.INGREDIENT ?
      this.dialog.open(IngredientModalComponent, config) : this.dialog.open(DirectionModalComponent, config);

    modal.afterClosed().subscribe((result: ModalData<any>| undefined) => {
      if (result && result.name) { this[`handle${result.name}Data`](result.value, result.mode); }
    });
  }

  // DELETE
  delete(del: Ingredient | Direction) {
    const type = this.getType(del);
    const confirmModal = this.dialog.open(ConfirmModalComponent, {
      panelClass: 'modalComeIn',
      data: { title: `Delete ${type}?`, msg: 'Are you sure, it will be delete?' }
    });

    confirmModal.afterClosed().subscribe((result: boolean) => {
      if (result) { this[`handle${type}Data`](del, Mode.Delete); }
      return;
    });
  }

  private handleIngredientData(ingredient: Ingredient, mode: Mode) {
    switch (mode) {
      case Mode.Create: {
        if (ingredient) { this.ingredientList.push(ingredient); }
        else { throw new Error(`Cannot find ingredient to ${Mode.Create}`); }
        break;
      }
      case Mode.Edit: {
        const index = this.ingredientList.findIndex(x => x.index === ingredient.index);
        if (index >= 0) { this.ingredientList[index] = ingredient; }
        else { throw new Error(`Cannot find ingredient index to ${Mode.Edit}`); }
        break;
      }
      case Mode.Delete: {
        const index = this.ingredientList.findIndex(x => x.index === ingredient.index);
        if (index >= 0) {
          this.ingredientList.splice(index, 1);
          this.reOrderIndex('ingredientList');
        } else { throw new Error(`Cannot find ingredient index to ${Mode.Delete}`); }
        break;
      }
      default: return;
    }
    this.ingredients.setValue(this.ingredientList);
  }

  private handleDirectionData(direction: Direction, mode: Mode) {
    switch (mode) {
      case Mode.Create: {
        if (direction) { this.directionList.push(direction); }
        else { throw new Error(`Cannot find direction to ${Mode.Create}`); }
        break;
      }
      case Mode.Edit: {
        const index = this.directionList.findIndex(x => x.index === direction.index);
        if (index >= 0) { this.directionList[index] = direction; }
        else { throw new Error(`Cannot find direction index to ${Mode.Edit}`); }
        break;
      }
      case Mode.Delete: {
        const index = this.directionList.findIndex(x => x.index === direction.index);
        if (index >= 0) {
          this.directionList.splice(index, 1);
          this.reOrderIndex('directionList');
        } else { throw new Error(`Cannot find direction index to ${Mode.Delete}`); }
        break;
      }
      default: return;
    }
    this.directions.setValue(this.directionList);
  }

  private reOrderIndex = (arrayName: string) => (this[arrayName] as any[]).map((value, i) => { value.index = i + 1; });

  test(e) {
    console.log(e);
  }
}
