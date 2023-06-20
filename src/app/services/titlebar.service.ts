import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitlebarService {
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>("This shouldn't be here!");
  title$: Observable<string> = this.titleSubject.asObservable();

  updateTitle(newTitle: string){
    this.titleSubject.next(newTitle);
  }
}
