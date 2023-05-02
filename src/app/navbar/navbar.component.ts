import { Component } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  pages = [];

  constructor(private router: Router) {
    const routes: Routes = router.config;
    routes.forEach((route: object) => {
      // This checks ughh nvm
      if (route.hasOwnProperty("pathName")){
        
      }

    });
  }
}
