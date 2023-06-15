import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
