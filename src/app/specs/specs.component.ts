import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OpenweatherService} from '../services/openweather.service';
import {tap, map} from 'rxjs/operators';

@Component({selector: 'app-specs', templateUrl: './specs.component.html', styleUrls: ['./specs.component.css']})
export class SpecsComponent implements OnInit {

  tempo : Array < any >;
  lista : Array < any >;
  tempoagora : Array < any >;
  cidade : Array < any >;
  currentTime = new Date();

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

  onClick(id) {
    this
      .OpenweatherService
      .detalhesTempo(id)
      .subscribe(dados => this.tempoagora = dados, erro => console.log(erro));

    this
      .OpenweatherService
      .listaCity(id)
      .subscribe(dados => this.cidade = dados, erro => console.log(erro));
  }
}
