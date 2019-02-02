import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
 
export class DjangoHeroesService {
    constructor(private _http: HttpClient ) {}

    getDjangoHeroes(){
        this._http.get('/django/heroes')
    }

    makeDjangoHeroes(hero){
        this._http.post('/django/heroes', hero);
    }
}
