import { Component } from '@angular/core';
import { RoutingInfo } from '../routing-info';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routing_info = RoutingInfo.getInstance();
}
