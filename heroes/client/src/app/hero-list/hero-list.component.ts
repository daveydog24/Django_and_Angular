import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {

    hero = {'hero': '', 'abilities': "none"};
    heroes = [];

    constructor(private _heroesService: HeroesService, private _http: HttpClient) {
        this._http = _http;
        this._heroesService = _heroesService;
    }
    
    ngOnInit() {
    }  

    // access our hero service to get all the heroes in the service and eventually from the database.
    getAll(event){
        this._heroesService.getAll(data => {
            this.heroes = data;
            console.log("heroes: ", this.heroes)
        });
    }
    
    createNewHero(){
        // storing our recent data sent from ngModel after submitting the form into data
        let data = this.hero
        console.log(data)

        // creates hero object that we are going to send to the service and eventually the database.
        let newHero = {
            'hero': data.hero,
            'abilities': data.abilities
        };

        // sends our new hero to our hero service and gets the new set of heros from the callback
        // from the heroservice create Hero function.
        this._heroesService.createHero(newHero, heroes => {
            this.heroes = heroes;
        });
        // return this._http.post('heroes', this.heroes)
    }
}
