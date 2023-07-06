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
    "C#",
    "Javascript",
    "Typescript",
    "SQL",
    "Python",
    "Bash"
  ]

  protected software = [
    "Angular",
    "NodeJS",
    "ExpressJS",
    "Nginx",
    "PostgreSQL",
    "Linux",
    "Git"
  ]
}
