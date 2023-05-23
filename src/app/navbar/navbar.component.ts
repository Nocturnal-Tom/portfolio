import { Component } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
import { RouteInfo, isRouteInfo, extractAllRoutes, filterRouteInfoByType } from '../routing-info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mainPages: Array<RouteInfo> = [];
  
  
  constructor(private router: Router) {
    let routes = router.config
    let allRoutes: Routes = extractAllRoutes(routes)
    console.log("allRoutes length: ", allRoutes.length)
    this.mainPages = filterRouteInfoByType(allRoutes, "Main Page") // We need to cast here since we know this function can only return an Array<RouteInfo>
    console.log("Main pages length: ", this.mainPages.length)
  }
}
