import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RouteInfo, extractAllRoutes, filterRouteInfoByType } from '../routing-info';

// I'm don't fully understand the IntersectionObserverEntry functionality,
// but it only registers when an element becomes sticky if the "top" css property is set to -1 (or less)
// Not ideal and I don't like this solution, will fix in future


// TODO:
// Find better way to determine if element is in a sticky state

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  mainPages: Array<RouteInfo> = [];
  @ViewChild("navbar_item_container", {static: true, read: ElementRef<HTMLElement>})
  private container!: ElementRef<HTMLElement>;
  
  private observer!: IntersectionObserver;

  constructor(private router: Router) {
    const routes = this.router.config;
    const allRoutes: Routes = extractAllRoutes(routes);
    this.mainPages = filterRouteInfoByType(allRoutes, "Main Page"); // We need to cast here since we know this function can only return an Array<RouteInfo>
  }

  observerCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    let entry = entries[0];
    let el: Element = entry.target;
    
    if (entry.isIntersecting){
      el.classList.remove("sticky-background");
    } else {
      el.classList.add("sticky-background");
    }
  }

  ngAfterViewInit() {
    this.observer = new window.IntersectionObserver(this.observerCallback, {root: null, threshold: 1.0})
    let a: IntersectionObserverInit;
    let container_el = this.container.nativeElement;
    this.observer.observe(container_el);
  }
}
