import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected languages = [
    "C",
    "C++",
    "Javascript",
    "Typescript",
    "Python",
  ]

  protected languageFrameworks = new Map([
    ["Typescript", ["Angular"]]  
  ])
}
