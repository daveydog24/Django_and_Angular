import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
    hero = {'name': undefined, 'abilities': undefined};
    heroes = [];

    constructor(private _heroesService: HeroesService) {
        this._heroesService = _heroesService;
    }
    
    // later this will get all info asynch and then only display or not display when the button is clicked.
    ngOnInit() {}

    // access our hero service to get all the heroes in the service and eventually from the database.
    getAll(event){
        this._heroesService.getAll(data => {
            this.heroes = data;
        });
    }
    
    // sends updated data from ngModel to the hero service/database and updates our heroes
    createNewHero(){

        // this section should handle errors!! 
        if (this.hero.name == undefined) {            
            alert("YOU NEED TO ENTER A NAME!!!!");
            return;
        }
        if (this.hero.abilities == undefined) {
            alert("YOU NEED TO ENTER A ABILITY!!!!");
            return;
        }

        
        let newHero = {
            'name': this.hero.name,
            'abilities': this.hero.abilities
        };

        // sends our new hero to hero service and gets the new set of heros from the callback
        this._heroesService.createHero(newHero, heroes => {
            this.heroes = heroes;
            this.hero = {'name': undefined, 'abilities': undefined};
        });
    }
}
