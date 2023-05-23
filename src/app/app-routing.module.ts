import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RouteInfo } from "./routing-info"
import { HomeComponent } from './main-pages/home/home.component';
import { AboutComponent } from "./main-pages/about/about.component";
import { ContactComponent } from "./main-pages/contact/contact.component";
import { ProjectsComponent } from "./main-pages/projects/projects.component";
import { ProjectPortfolioComponent } from './main-pages/projects/project-portfolio/project-portfolio.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';

const mainPageRoutes: Array<RouteInfo> = [{
  path: "",
  pathName: "",
  routeType: "Main Page",
  component: PrimaryLayoutComponent,
  children: [
    {pathName: "Home", path: "", component: HomeComponent, routeType: "Main Page"},
    {pathName: "Home", path: "home", component: HomeComponent, routeType: "Main Page"},
    {pathName: "About Me", path: "about", component: AboutComponent, routeType: "Main Page"},
    {pathName: "My Projects", path: "projects", component: ProjectsComponent, routeType: "Main Page", children: [
      {pathName: "My Angular site", path: "portfolio", component: ProjectPortfolioComponent, routeType: "Project"}
    ]},
    {pathName: "Contact Me", path: "contact", component: ContactComponent, routeType: "Main Page"}
  ] as Array<RouteInfo>
}];


@NgModule({
  imports: [RouterModule.forRoot(mainPageRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
