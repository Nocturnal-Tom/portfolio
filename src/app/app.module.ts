import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { AboutComponent } from './main-pages/about/about.component';
import { ContactComponent } from './main-pages/contact/contact.component';
import { ProjectsComponent } from './main-pages/projects/projects.component';
import { HomeComponent } from './main-pages/home/home.component';
import { ProjectPortfolioComponent } from './main-pages/projects/project-portfolio/project-portfolio.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';
import { BackgroundComponent } from './background/background.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { BlogComponent } from './main-pages/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    ProjectPortfolioComponent,
    PrimaryLayoutComponent,
    BackgroundComponent,
    TitlebarComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
