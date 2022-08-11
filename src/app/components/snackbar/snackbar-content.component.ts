import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

export interface SnackBarType {
  type: 'success' | 'error' | 'warning',
  title?: string,
  message?: string,
}

@Component({
  selector: 'snackbar-content-component',
  templateUrl: './snackbar-content.component.html',
  styleUrls: ['./snackbar-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SnackBarContentComponent implements OnInit { 

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarType,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  closeHandler(): void {
    this._snackBar.dismiss();
  }
}
