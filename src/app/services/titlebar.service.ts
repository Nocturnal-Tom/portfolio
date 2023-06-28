import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AboutTitlebarComponent } from './about-titlebar/about-titlebar.component';
import { HomeTitlebarComponent } from './home-titlebar/home-titlebar.component';
import { ProjectsTitlebarComponent } from './projects-titlebar/projects-titlebar.component';
import { BlogTitlebarComponent } from './blog-titlebar/blog-titlebar.component';
import { ContactTitlebarComponent } from './contact-titlebar/contact-titlebar.component';

export interface TitlebarRoute{
    name: string,
    component: any
}

@Injectable({
  providedIn: 'root'
})
export class TitlebarService {
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>("This shouldn't be here!");
  title$: Observable<string> = this.titleSubject.asObservable();

  private titlebarRoutes: TitlebarRoute[] = [
    {
      name: "about",
      component: AboutTitlebarComponent
    },
    {
      name: "home",
      component: HomeTitlebarComponent
    },
    {
      name: "projects",
      component: ProjectsTitlebarComponent
    },
    {
      name: "blog",
      component: BlogTitlebarComponent
    },
    {
      name: "contact",
      component: ContactTitlebarComponent
    }
  ]

  updateTitle(newTitle: string){
    this.titleSubject.next(newTitle);
  }

  public getRoutes() : TitlebarRoute[] {
    return this.titlebarRoutes;
  }
}
