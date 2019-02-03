import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
 
export class DjangoHeroesService {
    constructor(private _http: HttpClient ) {}

    getDjangoHeroes(){
        return this._http.get('/django/heroes');
    }

    makeDjangoHeroes(hero){
        return this._http.post('/django/heroes', hero);
    }

    removeDjangoHero(hero){
        console.log("in the django-heroes-service in the removeDjangoHero Method");
        // what you should use to delete and get the id
        // console.log("hero.id:", hero.id)
        return this._http.delete(`/django/heroes/${hero.id}`, hero)
        // for(let i=0; i<this.tasks.length; i++){
        //     if(this.tasks[i] == task){
        //         this.tasks.splice(i, 1);
        //         break;
        //     }
        // }
        // callback();
    }
    updateDjangoHero(hero, id){
        return this._http.put(`/django/heroes/${id}`, hero)
    }
}
