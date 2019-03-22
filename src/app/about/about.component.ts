import { Component } from '@angular/core';
import { TABS } from './tabs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  tabs = TABS;

  constructor() { }

}
