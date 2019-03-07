import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faFolder, faBriefcase, faUserCircle, faEnvelope,
  faSun, faMoon,
  faLanguage, faDatabase, faBars, faGlasses, faLaptop,
  faCoffee, faCat, faTv, faMusic,
  faFlask, faChalkboardTeacher, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faGithub, faCss3, faHtml5, faJs, faFontAwesome, faDocker } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHome, faFolder, faBriefcase, faUserCircle, faEnvelope, // sidenav
  faSun, faMoon, // light-dark toggle
  faLanguage, faDatabase, faBars, faGlasses, faLaptop, // skills
  faCoffee, faCat, faTv, faMusic, // interests
  faFlask, faChalkboardTeacher, faPowerOff, // experience
  faAngular, faGithub, faCss3, faHtml5, faJs, faFontAwesome, faDocker // brands
);

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatCardModule,
  MatTabsModule,
  MatBottomSheetModule,
  MatGridListModule,
  MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { IconSvgComponent } from './icon-svg/icon-svg.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

import { SidenavService } from './side-nav/sidenav.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    IconSvgComponent,
    BottomSheetComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatGridListModule,
    MatExpansionModule
  ],
  entryComponents: [BottomSheetComponent],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
