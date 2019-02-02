import { Component, OnInit } from '@angular/core';
import { DjangoHeroesService } from '../django-heroes.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-django-heroes',
    templateUrl: './django-heroes.component.html',
    styleUrls: ['./django-heroes.component.css']
})

export class DjangoHeroesComponent implements OnInit {
    constructor(private _djangoHeroesService: DjangoHeroesService) {}
    django_heroes = [];

    ngOnInit() {
    }
    getAllHeroes() {
        let observable$: any = this._djangoHeroesService.getDjangoHeroes();
        observable$.subscribe( data => {
            console.log("in getAllHeroes method inside of.... django-heroes component. data: ", data);
        });
    }
    makeDjangoHero() {
        let hero = {
            'name': 'Zeus',
            'abilities': 'Immortale'
        };
        let observable$: any = this._djangoHeroesService.makeDjangoHeroes(hero);
        observable$.subscribe( data => {
            console.log("in makeDjanoHero method inside of.... django-heroes component. data: ", data);
        });
    }
}
