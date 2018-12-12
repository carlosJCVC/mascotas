import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mascotas';

  getRouteAnimation(outlet) {
      return outlet.activatedRouteData.animation;
  }
}
