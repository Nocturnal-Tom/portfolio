import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { PaperBackgroundComponent } from './paper-background/paper-background.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';


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
