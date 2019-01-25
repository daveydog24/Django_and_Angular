import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

    hero = {'hero': '', 'abilities': false};
    heroes = [];

    constructor(private _heroesService: HeroesService, private _http: HttpClient) {
        this._http = _http;
        this._heroesService = _heroesService;
    }
    
    ngOnInit() {
    }  

    getAll(event){
        console.log("heroes: ", this.heroes)
        this._heroesService.getAll(data => {
            this.heroes = data;
            console.log("heroes: ", this.heroes)
        });
    }
  
    createNewHero(){
        console.log("in hero service creating new hero")
        let data = this.hero
        console.log(data)

        if (data.hero == null) {
            data.hero = "Default";
        }
        let newHero = {
            'hero': data.hero,
            'abilities': data.abilities
        };
        this.heroes.push(newHero)
        return this._http.post('heroes', this.heroes)
    }
}
