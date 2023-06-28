import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteInfo } from "./routing-info"
import { HomeComponent } from './main-pages/home/home.component';
import { AboutComponent } from "./main-pages/about/about.component";
import { ContactComponent } from "./main-pages/contact/contact.component";
import { ProjectsComponent } from "./main-pages/projects/projects.component";
import { ProjectPortfolioComponent } from './main-pages/projects/project-portfolio/project-portfolio.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';
import { BlogComponent } from './main-pages/blog/blog.component';
import { Route } from '@angular/router';
import { AboutTitlebarComponent } from './services/about-titlebar/about-titlebar.component';
import { HomeTitlebarComponent } from './services/home-titlebar/home-titlebar.component';
import { BlogTitlebarComponent } from './services/blog-titlebar/blog-titlebar.component';
import { ProjectsTitlebarComponent } from './services/projects-titlebar/projects-titlebar.component';
import { ContactTitlebarComponent } from './services/contact-titlebar/contact-titlebar.component';

// // AboutTitleComponent
// const otherRoutes: Array<Route> = [
//   {
//     path: "about-title",
//     component: AboutTitleComponent,
//     outlet: "titlebar-outlet"
//   },
//   {
//     path: "home-title",
//     component: AboutTitleComponent,
//     outlet: "titlebar-outlet"
//   }
// ]


const routes: Array<RouteInfo> = [
  {
    // Primary routes
    pathName: "",
    path: "",
    routeType: "Layout",
    component: PrimaryLayoutComponent,
    children: [
      {
        pathName: "Home",
        path: "",
        component: HomeComponent,
        routeType: "Main Page"
      },
      {
        pathName: "About Me",
        path: "about",
        component: AboutComponent,
        routeType: "Main Page"
      },
      {
        pathName: "My Projects",
        path: "projects",
        component: ProjectsComponent,
        routeType: "Main Page",
        children: [
          {
            pathName: "My Angular site",
            path: "portfolio",
            component: ProjectPortfolioComponent,
            routeType: "Project"
          }
        ]
      },
      {
        pathName: "Blog",
        path: "blog",
        component: BlogComponent,
        routeType: "Main Page"
      },
      {
        pathName: "Contact Me",
        path: "contact",
        component: ContactComponent,
        routeType: "Main Page"
      }
    ] as Array<RouteInfo>},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}