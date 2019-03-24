import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { SidenavService } from '../side-nav/sidenav.service';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navItems = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Projects' },
    { label: 'Contact' },
    { label: 'Resume' }
  ];
  darkMode = true;
  @Input() pastIntro = false;
  @Input() scrollDown = true;

  constructor(private sidenav: SidenavService,
    private bottomSheet: MatBottomSheet,
    public el: ElementRef) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  toggleMode() {
    this.darkMode = !this.darkMode;
    this.sidenav.close();
  }

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetComponent);
    this.sidenav.close();
  }
}
