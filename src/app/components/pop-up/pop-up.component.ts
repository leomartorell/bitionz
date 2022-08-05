import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface PopupType {
  type: string;
  productType?: string;
  data: any;
  callback: (data: any) => {};
}
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopupType
  ) { }

  ngOnInit(): void {
  }

  callbackHandler(): void {
    this.data.callback({});
  }

  onCloseHandler(): void {
    this.dialogRef.close();
  }

}
