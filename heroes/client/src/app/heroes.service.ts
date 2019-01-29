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

    // sends back our list of heroes that we will eventually get from the database
    getAll(callback) {
       return callback(this.heroes);
    }

    // gets our hero from the hero-list component and adds it to our hero list 
    // and sends back the update hero list
    createHero(hero, callback){
        this.heroes.push(hero);
        callback(this.heroes);
    }

    // createNewHero(hero){
    //     console.log("in createNEWHERO inside hero service creating new hero")
    //     return this._http.post('heroes', hero)
    // }
}
