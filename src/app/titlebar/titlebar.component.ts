import { Component } from '@angular/core';
import { TitlebarService } from '../services/titlebar.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {
  private routerSubscription: Subscription;

  constructor(private titlebarService: TitlebarService, private router: Router){
    this.routerSubscription = router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        let titlebarUrl = event.url.slice(1);
        const indexOfPar = titlebarUrl.indexOf("(");
        if (indexOfPar != -1){
          titlebarUrl = titlebarUrl.slice(0, indexOfPar);
        }
        
        this.router.navigate([{outlets: {"titlebar-outlet": [titlebarUrl]}}]);
      }
    })
  }
  

}
