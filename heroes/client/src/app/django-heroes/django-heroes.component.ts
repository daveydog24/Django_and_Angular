import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-django-heroes',
    templateUrl: './django-heroes.component.html',
    styleUrls: ['./django-heroes.component.css']
})

export class DjangoHeroesComponent implements OnInit {
    constructor(private _heroesService: HeroesService) {}
    django_heroes = [];

    ngOnInit() {
        this._heroesService
    }

}
