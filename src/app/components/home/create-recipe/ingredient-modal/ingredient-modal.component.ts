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

  title = 'INGREDIENT';
  NAME_MAX_LEN = 250;
  UNIT_MAX_LEN = 100;
  AMOUNT_MAX_LEN = 50;
  TIP_MAX_LEN = 250;

  ingredientForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ModalData<Ingredient>,
    private dialogRef: MatDialogRef<IngredientModalComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
    console.log(this.data);
  }

  // tslint:disable-next-line:max-line-length
  getEl = (formElName: string, errorName = null) => errorName ? this.ingredientForm.get(formElName).errors[errorName] : this.ingredientForm.get(formElName);
  isInvalid = (formElName: string) => this.getEl(formElName).invalid && (this.getEl(formElName).dirty || this.getEl(formElName).touched);

  private initForm() {
    this.ingredientForm = this.fb.group({
      index: this.data.index,
      name: this.fb.control('', [Validators.required, Validators.maxLength(this.NAME_MAX_LEN)]),
      unit: this.fb.control('', [Validators.required, Validators.maxLength(this.UNIT_MAX_LEN)]),
      amount: this.fb.control('', [Validators.required, Validators.maxLength(this.AMOUNT_MAX_LEN)]),
      tip: this.fb.control('', [Validators.maxLength(this.TIP_MAX_LEN)]),
    });
  }

  saveIngredient() {
    console.log(this.ingredientForm.value);
    this.data.value = this.ingredientForm.value;
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}
