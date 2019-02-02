import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
 
export class DjangoHeroesService {
    constructor(private _http: HttpClient ) {}

    getDjangoHeroes(){
        return this._http.get('/django/heroes');
    }

    makeDjangoHeroes(hero){
        return this._http.post('/django/heroes', hero);
    }
}
