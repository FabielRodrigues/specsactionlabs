import {Component, OnInit} from '@angular/core';
import {OpenweatherService} from '../services/openweather.service';

@Component({selector: 'app-specs', templateUrl: './specs.component.html', styleUrls: ['./specs.component.css']})
export class SpecsComponent implements OnInit {

  tempo : Array < any >;
  constructor(private OpenweatherService : OpenweatherService) {}

  ngOnInit() {
    this
      .OpenweatherService
      .buscar()
      .subscribe(dados => this.tempo = dados);
  }
}
