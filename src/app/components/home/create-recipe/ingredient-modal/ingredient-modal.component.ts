import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Ingredient, ModalData } from '../../../../models';

@Component({
  selector: 'app-ingredient-modal',
  templateUrl: './ingredient-modal.component.html',
  styleUrls: ['./ingredient-modal.component.scss']
})
export class IngredientModalComponent implements OnInit {

  readonly NAME_MAX_LEN = 255;
  readonly UNIT_MAX_LEN = 100;
  readonly AMOUNT_MAX_LEN = 100;
  readonly TIP_MAX_LEN = 255;

  ingredientForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ModalData<Ingredient>,
    private dialogRef: MatDialogRef<IngredientModalComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() { this.initForm(this.data.value); }

  get title() { return `${this.data.mode} ${this.data.name}`; }

  // tslint:disable-next-line:max-line-length
  getEl = (formElName: string, errorName = null) => errorName ? this.ingredientForm.get(formElName).errors[errorName] : this.ingredientForm.get(formElName);
  isInvalid = (formElName: string) => this.getEl(formElName).invalid && (this.getEl(formElName).dirty || this.getEl(formElName).touched);

  private initForm(ingredient: Ingredient = null) {
    console.log(ingredient);
    this.ingredientForm = this.fb.group({
      index: this.data.index,
      name: this.fb.control('', [Validators.required, Validators.maxLength(this.NAME_MAX_LEN)]),
      unit: this.fb.control('', [Validators.required, Validators.maxLength(this.UNIT_MAX_LEN)]),
      amount: this.fb.control('', [Validators.required, Validators.maxLength(this.AMOUNT_MAX_LEN)]),
      tip: this.fb.control('', [Validators.maxLength(this.TIP_MAX_LEN)]),
    });
    if (ingredient) { this.setValue(ingredient); }
  }

  private setValue(ingredient: Ingredient) {
    try {
      Object.getOwnPropertyNames(this.ingredientForm.controls).forEach(
        (prop: string) => this.ingredientForm.controls[prop].setValue(ingredient[prop])
      );
    } catch (e) { throw new Error('Encounter error while setting ingredient form value'); }
  }

  saveIngredient() {
    this.data.value = this.ingredientForm.value;
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}
