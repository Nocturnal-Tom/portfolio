import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteInfo } from "./routing-info"
import { AppComponent } from './app.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Array<RouteInfo> = [
  {pathName: "", path: "", component: AppComponent},
  {pathName: "About Me", path: "/about", component: AboutComponent},
  {pathName: "My Projects", path: "/projects", component: ProjectsComponent},
  {pathName: "Contact Me", path: "/contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
