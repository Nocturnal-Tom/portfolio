import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { PaperBackgroundComponent } from './paper-background/paper-background.component';
import { AboutComponent } from './main-pages/about/about.component';
import { ContactComponent } from './main-pages/contact/contact.component';
import { ProjectsComponent } from './main-pages/projects/projects.component';
import { HomeComponent } from './main-pages/home/home.component';


@NgModule({
  declarations: [
    MainPageComponent,
    NavbarComponent,
    NavbarItemComponent,
    PaperBackgroundComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class MainPageModule {

}
