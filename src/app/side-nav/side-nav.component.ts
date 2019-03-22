import {
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  HostListener,
  Output } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  navItems = [
    { label: 'Home', icon: 'home', ref: 'home' },
    { label: 'About', icon: 'user-circle', ref: 'about' },
    { label: 'Experience', icon: 'laptop', ref: 'experience' },
    { label: 'Projects', icon: 'folder', ref: 'projects' },
    { label: 'Contact', icon: 'envelope', ref: 'contact' }
  ];
  previousScrollPosition = 0;
  @Output() passedIntro = false;
  @Output() scrollingDown = false;
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('divide', {read: ElementRef}) divide: ElementRef;

  constructor(private sidenavService: SidenavService, private route: ActivatedRoute) {	}

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView(
          { behavior: 'smooth', block: 'start', inline: 'nearest' }
        );
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const componentPosition = this.divide.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    // detect passing intro component
    if (scrollPosition >= componentPosition - 32) {
      this.passedIntro = true;
    } else {
      this.passedIntro = false;
    }

    // detect scroll direction
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
