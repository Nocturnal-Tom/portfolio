import { Component } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
import { RouteInfo, isRouteInfo } from '../routing-info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mainPages: Array<RouteInfo> = [];

  constructor(private router: Router) {
    // We
    const routes: Routes = router.config;
    routes.forEach((route: Route) => {
      if (isRouteInfo(route)){
        let routeInfo: RouteInfo = route as RouteInfo
        let isUniqueRoute: boolean = false
        if (routeInfo.routeType == "Main Page"){
          this.mainPages.forEach((ri: RouteInfo) => {
            if (ri.component != routeInfo.component){
              isUniqueRoute = true
              console.log("agg")
            }
          })
          if (isUniqueRoute){
            this.mainPages.push(routeInfo)
          }
        }
      }

    });
  }
}
