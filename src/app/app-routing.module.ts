import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { generateRoute, RouteInfo } from "./navigation-data"
import { AppComponent } from './app.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  navigation_data: Array<NavigationData> = [
    new NavigationData("", " ", AppComponent),
    new NavigationData("About Me", "/about", AboutComponent),
    new NavigationData("My Projects", "/projects", ProjectsComponent),
    new NavigationData("Contact Me", "/contact", ContactComponent)
  ];

 }
