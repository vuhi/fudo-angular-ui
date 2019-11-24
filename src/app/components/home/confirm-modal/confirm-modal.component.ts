import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, msg: string},
    private dialogRef: MatDialogRef<ConfirmModalComponent>
  ) {}

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }
}
