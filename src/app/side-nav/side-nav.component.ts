import {
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  Output,
  HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav.service';
import { SIDENAV_ITEMS } from './side-nav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  navItems = SIDENAV_ITEMS;
  previousScrollPosition = 0;
  @Output() passedIntro = false;
  @Output() scrollingDown = false;
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('divide', {read: ElementRef}) divide: ElementRef;

  constructor(private sidenavService: SidenavService) {	}

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const componentPosition = this.divide.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    // check if passed intro component
    if (scrollPosition >= componentPosition - 32) {
      this.passedIntro = true;
    } else {
      this.passedIntro = false;
    }

    // get scroll direction (UP/DOWN)
    if (this.previousScrollPosition < scrollPosition) {
      this.scrollingDown = true;
    } else if (this.previousScrollPosition > scrollPosition) {
      this.scrollingDown = false;
    }
    this.previousScrollPosition = scrollPosition;
  }

  closeSidenav(elementId: string) {
    this.sidenav.toggle();
    document.getElementById(elementId).scrollIntoView(
      { behavior: 'smooth', block: 'start', inline: 'nearest' }
    );
  }
}
