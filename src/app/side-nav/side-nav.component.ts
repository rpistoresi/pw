import { Component, ViewChild, OnInit, Input, ElementRef } from '@angular/core';
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
    { label: 'About', icon: 'person_pin', ref: 'about' },
    { label: 'Experience', icon: 'work', ref: 'experience' },
    { label: 'Projects', icon: 'folder', ref: 'projects' },
    { label: 'Contact', icon: 'email', ref: 'contact' }
  ];

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {	}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  closeSidenav() {
    this.sidenav.toggle();
  }
}
