import { Component, OnInit } from '@angular/core';
import { DjangoHeroesService } from '../django-heroes.service';

@Component({
    selector: 'app-django-heroes',
    templateUrl: './django-heroes.component.html',
    styleUrls: ['./django-heroes.component.css']
})

export class DjangoHeroesComponent implements OnInit {
    constructor(private _djangoHeroesService: DjangoHeroesService) {}
    django_heroes = [];
    hero = {'name': undefined, 'abilities': undefined};

    ngOnInit() {
    }
    getAllHeroes() {
        let observable$ = this._djangoHeroesService.getDjangoHeroes();
        observable$.subscribe( data => {
            console.log("in getAllHeroes method inside of.... django-heroes component. data: ", data);
            this.django_heroes = data["heroes"];
        });
    }
    makeDjangoHero() {

        if (this.hero.name == undefined) {            
            alert("YOU NEED TO ENTER A NAME!!!!");
            return;
        }
        if (this.hero.abilities == undefined) {
            alert("YOU NEED TO ENTER A ABILITY!!!!");
            return;
        }
        
        let observable$ = this._djangoHeroesService.makeDjangoHeroes(this.hero);
        observable$.subscribe( data => {
            console.log("in makeDjanoHero method inside of.... django-heroes component. data: ", data);
            this.django_heroes = data["heroes"];
            this.hero = {'name': undefined, 'abilities': undefined};
        });
    }

    removeHero(hero){
        console.log("in the django heroes component in the removeHero Method first line")
        console.log(hero);
        let observable$ = this._djangoHeroesService.removeDjangoHero(hero);
        observable$.subscribe( data => {
            console.log("in removeDjanoHero method inside of.... django-heroes component. data: ", data);
            console.log("deleted?")
        });
    }
}
