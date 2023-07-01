import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-about-titlebar',
  templateUrl: './about-titlebar.component.html',
  styleUrls: ['./about-titlebar.component.scss']
})
export class AboutTitlebarComponent implements OnInit  {
  ngOnInit (){
    console.log("About titlebar compoennt initialised!!!");
  }
}
