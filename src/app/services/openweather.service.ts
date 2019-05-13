import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class OpenweatherService {

  getApi = "76d1b43ba3695cfae59aa9f7dc9b4877";
  language = "pt_br";
  typeMetrics = "metric";
  cityDefault = "Brasília";

  constructor(private http : HttpClient) {}

  listaAtual() {
    return this
      .http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityDefault}&APPID=${this.getApi}&lang=${this.language}&units=${this.typeMetrics}`);
  }

  listaCity(id : number) {
    return this
      .http
      .get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${this.getApi}&lang=${this.language}&units=${this.typeMetrics}`)
      .pipe(tap(console.log));
  }

  busca(q : string) {
    return this
      .http
      .get(`http://api.openweathermap.org/data/2.5/find?q=${q}&APPID=${this.getApi}&lang=pt_br&units=metric`);
  }

  detalhesTempo(id : number) {
    return this
      .http
      .get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${this.getApi}&lang=pt_br&units=metric`)
      .pipe(tap(console.log));
  }
}
