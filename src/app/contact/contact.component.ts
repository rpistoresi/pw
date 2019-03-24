import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [`.contact {
    text-align: center;
    font-size: 22px;
    padding-bottom: 30px;
  }`]
})
export class ContactComponent {
  url = 'mailto:rpistoresi@nevada.unr.edu';
  invite = `I am always open to new opportunities and challenges
    that align with my skills and interests.`;

  @Input() darkMode = false;

  constructor() { }

}
