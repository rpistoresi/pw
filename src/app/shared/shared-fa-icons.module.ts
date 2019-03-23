import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faHome, faFolder, faBriefcase, faUserCircle, faEnvelope, // sidenav
  faSun, faMoon,                                           // light-dark toggle
  faLanguage, faDatabase, faBars, faGlasses, faLaptop,     // skills
  faCoffee, faCat, faTv, faMusic,                          // interests
  faFlask, faChalkboardTeacher,                            // experiences
  faPowerOff } from '@fortawesome/free-solid-svg-icons';

import {
  // all brands
  faAngular, faGithub, faCss3, faHtml5, faJs,
  faFontAwesome, faDocker, faAws, faBitbucket,
  faPhp, faWordpress } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHome, faFolder, faBriefcase, faUserCircle, faEnvelope, // sidenav
  faSun, faMoon,                                           // light-dark toggle
  faLanguage, faDatabase, faBars, faGlasses, faLaptop,     // skills
  faCoffee, faCat, faTv, faMusic,                          // interests
  faFlask, faChalkboardTeacher, faPowerOff,                // experience
  faAngular, faGithub, faCss3, faHtml5, faJs,              // brands
  faFontAwesome, faDocker, faAws, faBitbucket,             // ''
  faPhp, faWordpress                                       // ''
);

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: []
})
export class IconModule { }
