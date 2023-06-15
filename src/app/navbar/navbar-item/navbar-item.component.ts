import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent {
  @Input() pageRouteName = "error";
  @Input() pageName = "error";

  constructor(private activatedRoute: ActivatedRoute){
    console.log("activatedRoute.url: ", activatedRoute.url)
  }
}
