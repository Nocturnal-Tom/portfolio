import { NgModule } from '@angular/core';
import { RouterModule, Router, Route, Routes } from '@angular/router';
import { RouteInfo } from "./routing-info"
import { MainPageComponent } from './app.component';
import { AboutComponent } from "./main-pages/about/about.component";
import { ContactComponent } from "./main-pages/contact/contact.component";
import { ProjectsComponent } from "./main-pages/projects/projects.component";
import { HomeComponent } from './main-pages/home/home.component';

const mainPageRoutes: Array<Route> = [
  {pathName: "Home", path: "", component: HomeComponent, routeType: "Main Page"},
  {pathName: "Home", path: "home", component: HomeComponent, routeType: "Main Page"},
  {pathName: "About Me", path: "about", component: AboutComponent, routeType: "Main Page"},
  {pathName: "My Projects", path: "projects", component: ProjectsComponent, routeType: "Main Page"},
  {pathName: "Contact Me", path: "contact", component: ContactComponent, routeType: "Main Page"}
] as Array<RouteInfo>;

const subRoute: Routes = [
  {component: MainPageComponent, path: "hiiii"}
]

@NgModule({
  imports: [RouterModule.forRoot(mainPageRoutes.concat(subRoute))],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
