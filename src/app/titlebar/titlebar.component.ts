import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TitlebarService } from '../services/titlebar.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutTitlebarComponent } from '../main-pages/about/about-titlebar/about-titlebar.component';
import { Type, AfterViewInit } from '@angular/core';
import { HomeTitlebarComponent } from '../main-pages/home/home-titlebar/home-titlebar.component';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements AfterViewInit {
  private routerSubscription: Subscription;

  @ViewChild("titlebarContainer", {read: ViewContainerRef})
  private titlebarContainer!: ViewContainerRef;

  constructor(private titlebarService: TitlebarService, private router: Router){
    console.log("subscribing");
    this.routerSubscription = router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.titlebarContainer?.clear();
        this.titlebarContainer?.createComponent(this.urlToTitlebarComponent(event.url));
      }
    })
    console.log("subscribed");
  }

  ngAfterViewInit(): void {
    this.titlebarContainer.clear();
    this.titlebarContainer.createComponent(this.urlToTitlebarComponent(this.router.url));
  }

  public urlToTitlebarComponent(url: string) : Type<unknown> {
    // Removes the "/" at the beginning
    let titlebarUrl = url.slice(1);
    titlebarUrl = titlebarUrl.split(/[\/\\]/)[0];
    console.log(titlebarUrl)
    if (titlebarUrl.length === 0){
      titlebarUrl = "home";
    }

    let component: Type<unknown> = this.titlebarService.getRoutes().find((val) => {
      return val.name == titlebarUrl
    })?.component;

    if (component == null){
      component = HomeTitlebarComponent;
    }

    return component;
  }
  

}
