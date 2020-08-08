import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bga-rankings-dashboard';
  constructor(public router: Router){
    this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          gtag('config', 'UA-174933228-1',
            {
              'page_path': event.urlAfterRedirects
            }
          );
        }
      }
    )}
}
