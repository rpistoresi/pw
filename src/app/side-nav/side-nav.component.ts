import { Component, Input, ViewChild, OnInit, ElementRef, HostListener } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  navItems = [
    { label: 'Home', icon: 'home', ref: 'intro' },
    { label: 'About', icon: 'user-circle', ref: 'about' },
    { label: 'Experience', icon: 'laptop', ref: 'experience' },
    { label: 'Projects', icon: 'folder', ref: 'projects' },
    { label: 'Contact', icon: 'envelope', ref: 'contact' }
  ];

  state = false;
  scrollingDown = false;
  previousScrollPosition = 0;

  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('divide', {read: ElementRef}) divide: ElementRef;

  constructor(private sidenavService: SidenavService, public el: ElementRef) {	}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const componentPosition = this.divide.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition - 32) {
      this.state = true;
    } else {
      this.state = false;
    }

    if (this.previousScrollPosition < scrollPosition) {
      this.scrollingDown = true;
    } else if (this.previousScrollPosition > scrollPosition) {
      this.scrollingDown = false;
    }
    this.previousScrollPosition = scrollPosition;
  }

  closeSidenav() {
    this.sidenav.toggle();
  }
}
