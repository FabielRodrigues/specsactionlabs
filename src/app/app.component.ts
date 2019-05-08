import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OpenweatherService} from './services/openweather.service';
import {stringify} from '@angular/core/src/render3/util';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'specsActionLabs';
  tempo : Array < any >;
  constructor(private OpenweatherService : OpenweatherService) {}

}
