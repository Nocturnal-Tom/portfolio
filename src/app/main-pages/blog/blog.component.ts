import { Component } from '@angular/core';


export interface BlogData{
  title: string,
  description: string,
  content: string
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  constructor(){
    fetch("http://tmwr.co.uk/api/blogs")
    .then((res: Response) => res.json())
    .then((data) => this.onBlogsFetched(data));
  }


  onBlogsFetched(blogs: Object){
    console.log(Object.entries(blogs));
  }
}
