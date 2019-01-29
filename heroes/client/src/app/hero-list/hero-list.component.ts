import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
    hero = {'hero': '', 'abilities': "none"};
    heroes = [];

    constructor(private _heroesService: HeroesService) {
        this._heroesService = _heroesService;
    }
    
    ngOnInit() {}

    // access our hero service to get all the heroes in the service and eventually from the database.
    getAll(event){
        this._heroesService.getAll(data => {
            this.heroes = data;
        });
    }
    
    // sends updated data from ngModel to the hero service/database and updates our heroes
    createNewHero(){
        let newHero = {
            'hero': this.hero.hero,
            'abilities': this.hero.abilities
        };

        // sends our new hero to hero service and gets the new set of heros from the callback
        this._heroesService.createHero(newHero, heroes => {
            this.heroes = heroes;
        });
    }
}
