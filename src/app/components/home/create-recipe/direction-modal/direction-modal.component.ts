import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Direction, ModalData } from '../../../../models';

@Component({
  selector: 'app-direction-modal',
  templateUrl: './direction-modal.component.html',
  styleUrls: ['./direction-modal.component.scss']
})
export class DirectionModalComponent implements OnInit {

  readonly DIRECTION_MAX_LEN = 500;
  readonly TIP_MAX_LEN = 250;

  directionForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ModalData<Direction>,
    private dialogRef: MatDialogRef<DirectionModalComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() { this.initForm(this.data.value); }

  get title() { return `${this.data.mode} ${this.data.name}`; }

  getEl = (formElName: string, errorName = null) =>
    errorName ? this.directionForm.get(formElName).errors[errorName] : this.directionForm.get(formElName);
  isInvalid = (formElName: string) =>
    this.getEl(formElName).invalid && (this.getEl(formElName).dirty || this.getEl(formElName).touched);

  private initForm(direction: Direction = null) {
    this.directionForm = this.fb.group({
      index: this.data.index,
      direction: this.fb.control('', [Validators.required, Validators.maxLength(this.DIRECTION_MAX_LEN)]),
      tip: this.fb.control('', [Validators.maxLength(this.TIP_MAX_LEN)]),
    });
    if (direction) { this.setValue(direction); }
  }

  private setValue(direction: Direction) {
    try {
      Object.getOwnPropertyNames(this.directionForm.controls).forEach(
        (prop: string) => this.directionForm.controls[prop].setValue(direction[prop])
      );
    } catch (e) { throw new Error('Encounter error while setting direction form value'); }
  }

  saveDirection() {
    this.data.value = this.directionForm.value;
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}
