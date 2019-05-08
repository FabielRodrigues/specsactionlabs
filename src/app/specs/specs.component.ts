import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OpenweatherService} from '../services/openweather.service';
import {tap, map} from 'rxjs/operators';

@Component({selector: 'app-specs', templateUrl: './specs.component.html', styleUrls: ['./specs.component.css']})
export class SpecsComponent implements OnInit {

  tempo : Array < any >;
  lista : Array < any >;
  constructor(private OpenweatherService : OpenweatherService) {}

  ngOnInit() {
    this
      .OpenweatherService
      .listaAtual()
      .subscribe(dados => this.tempo = dados);
  }

  onSubmit(q : NgForm) {
    this
      .OpenweatherService
      .busca(q.value.city)
      .subscribe(dados => this.lista = dados.list, erro => console.log(erro));
  }
}
