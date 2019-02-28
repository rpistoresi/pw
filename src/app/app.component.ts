import { Component, OnInit } from '@angular/core';
import { SidenavService } from './side-nav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
  }
}
