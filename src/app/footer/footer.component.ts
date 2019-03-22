import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/raymondpistoresi/'},
    { label: 'GitHub', link: 'https://github.com/rpistoresi/' }
  ];

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

}
