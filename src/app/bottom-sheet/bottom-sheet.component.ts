import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'bottom-sheet.component.html',
  styles: [`.mat-icon {
    display: inline-flex;
    vertical-align: middle;
    margin-right: 5px;
  }`]
})
export class BottomSheetComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    // event.preventDefault();
  }
}
