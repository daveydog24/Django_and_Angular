import { Observable } from 'rxjs/';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class CityDataService {
  api_key: string = '527433346fce7eb6086579727f850b8d'
  constructor(private _http: HttpClient) {
   }

  retrieveCityData(city: string): Observable<City> {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.api_key}`);
  }
}

// their code...... 

// import { Http } from '@angular/http';
// import { Injectable } from '@angular/core';
// import 'rxjs';

// @Injectable()
// export class WeatherService {

//   constructor(private _http: Http) { }

//   getWeather(city: string) {
//     return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=90d0b79bd6205d862f8457b4d0c44e76`)
//     .map( data => data.json() )
//     .toPromise();
//   }

// }