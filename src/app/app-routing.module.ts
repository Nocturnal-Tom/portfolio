import { NgModule } from '@angular/core';
import { RouterModule, Router, Route, Routes } from '@angular/router';
import { RouteInfo } from "./routing-info"
import { MainPageComponent } from './app.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

const mainPageRoutes: Array<Route> = [
  {pathName: "", path: "", component: MainPageComponent, routeType: "Main Page"},
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
  constructor(private router: Router){
    router.config.forEach((route: Route) => {
      // Simple way to determine if the route implements the RouteInfo interface
      let routeInfoPropertyKey: string = "routeType"  // To make it more readable/understandable
      if (route.hasOwnProperty(routeInfoPropertyKey)) {
        console.log("Main page route: ", route)
      }
      else {
        console.log("Not a main page route: ", route)
      }
    });
  }
 }
