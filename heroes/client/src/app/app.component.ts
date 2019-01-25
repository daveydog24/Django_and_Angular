import { Component } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'client';
    // constructor(){};
    heroes = [];
    
    constructor(private _heroesService: HeroesService) {
        this._heroesService = _heroesService;
    }
    displayHeroes(){
        let observable = this._heroesService.getAll(event);
        observable.subscribe(data => {
            console.log("in app component... data: ", data);
        })
    }
    makeHero(){
        let hero = {
            'name': "Zeus",
            'abilities': true
        };
        let observable = this._heroesService.createNewHero(hero);
        observable.subscribe(data => {
            console.log(data)
        })
    }
}
