import { Component } from '@angular/core';

type ProjectType = "C" | "C++" | "Web" | "Python";

interface Projects {
  projectType: ProjectType;
  projects: ProjectInfo[];
}

interface ProjectInfo {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  private things = [];
  protected projects: Projects[] = [
    {
      projectType: "C",
      projects: [
        {
          name: "2D Math Library",
          desc: "A simple 2D Math Library that includes data structures and functions for things like Vectors and Matrices."
        }
      ]
    }

  ]
}
