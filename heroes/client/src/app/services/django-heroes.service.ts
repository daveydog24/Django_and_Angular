import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
 
export class DjangoHeroesService {
    constructor(private _http: HttpClient) {}

    // USES DJANGO AND HTTP ROUTING TO GET ALL HEROES IN OUR DATABASE
    getDjangoHeroes(){
        return this._http.get('/django/heroes');
    }
    
    // USES DJANGO AND HTTP ROUTING TO CREATE A NEW HERO IN OUR DATABASE WITH DATA FROM OUR FORM PASSED IN
    createDjangoHero(hero){
        return this._http.post('/django/heroes', hero);
    }
    
    // USES DJANGO AND HTTP ROUTING TO DELETE HERO IN OUR DATABASE THAT WAS SELECTED AND PASSED IN
    removeDjangoHero(hero){
        return this._http.delete(`/django/heroes/${hero.id}`, hero)
    }

    // USES DJANGO AND HTTP ROUTING TO UPDATE AN EXISTING HERO WITH THE PASSED IN INFORMATION
    updateDjangoHero(hero, id){
        return this._http.put(`/django/heroes/${id}`, hero)
    }
}
