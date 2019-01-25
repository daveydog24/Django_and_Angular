import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HeroesService {
    heroes = [
        {
          "hero": "Hercules",
          "abilities": "Strong"
        },
        {
          "hero": "Wolverine",
          "abilities": "Invincible"
        }
      ];
    constructor(private _http: HttpClient) {
        this._http = _http;
    }
    getAll(callback) {
       return callback(this.heroes);
    }
    createHero(hero, callback){
        this.heroes.push(hero);
        callback();
    }
    createNewHero(hero){
        console.log("in hero service creating new hero")
        return this._http.post('heroes', hero)
    }
}
