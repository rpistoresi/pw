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
  resume = './assets/Pistoresi_Resume.pdf';
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  dismissBottomSheet(): void {
    this.bottomSheetRef.dismiss();
  }
}
