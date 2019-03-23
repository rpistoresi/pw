import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Responsive layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Components
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
  MatExpansionModule } from '@angular/material';

// My Components
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

// Services
import { SidenavService } from './side-nav/sidenav.service';

// Routing
import { AppRoutingModule } from './app-routing.module';

// FA Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconModule } from './shared/shared-fa-icons.module';

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
    BottomSheetComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IconModule,
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
    MatExpansionModule
  ],
  entryComponents: [BottomSheetComponent],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
