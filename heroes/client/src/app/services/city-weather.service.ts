import { Observable } from 'rxjs/';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './weather/city';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class CityWeatherService {
    api_key: string = '527433346fce7eb6086579727f850b8d'
    constructor(private _http: HttpClient) {}

    retrieveCityData(city: string): Observable<City> {
        return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.api_key}`);
    }
}