import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class OpenweatherService {

  private readonly openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=São Paulo&APPID=76d1b43ba3695cf" +
      "ae59aa9f7dc9b4877&lang=pt_br&units=metric";
  getApi = "76d1b43ba3695cfae59aa9f7dc9b4877";

  constructor(private http : HttpClient) {}

  buscar() {
    return this.http.get < Array < any > > (this.openWeatherUrl).pipe(tap(console.log));
  }
}
