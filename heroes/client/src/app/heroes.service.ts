import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HeroesService {
    // temp data till we add a database to store heroes
    heroes = [
        {
          "name": "Hercules",
          "abilities": "Strong"
        },
        {
          "name": "Wolverine",
          "abilities": "Invincible"
        }
    ];
    constructor() {}

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
}
