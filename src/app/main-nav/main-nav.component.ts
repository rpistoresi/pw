import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  brand = 'T 3 S L A';
  leftLinks = [
    { title: 'model s' },
    { title: 'model x' },
    { title: 'model 3' },
    { title: 'roadster' },
    { title: 'energy' }
  ];
  rightLinks = [
    { title: 'shop' },
    { title: 'sign in' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
