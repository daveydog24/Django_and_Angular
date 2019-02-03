import { Component, OnInit } from '@angular/core';
import { DjangoHeroesService } from '../django-heroes.service';

@Component({
    selector: 'app-django-heroes',
    templateUrl: './django-heroes.component.html',
    styleUrls: ['./django-heroes.component.css']
})

export class DjangoHeroesComponent implements OnInit {
    constructor(private _djangoHeroesService: DjangoHeroesService) {}
    // variables needed for dispalying information and all CRUD operations
    django_heroes = [];
    hero = {
        'name': undefined, 
        'abilities': undefined
    };
    allOn = true;
    updateHeroOn = false;
    updateDjangoHeroId = undefined;

    // initializes our page with the heroes from our database;
    ngOnInit() {
        this.getAllHeroes()
    }

    // retrieves the list of all of our heroes using the DjangoHeroService and updates the hero list.
    getAllHeroes() {

        // clears entry and updates switches
        this.allOn = true;
        this.updateHeroOn = false;
        this.hero = {'name': undefined, 'abilities': undefined};

        let observable$ = this._djangoHeroesService.getDjangoHeroes();
        observable$.subscribe( data => {
            this.django_heroes = data["heroes"];
        });
    }

    // creates a new DjangoHero and after completion updates are hero list and clears our hero form template 
    // that we have ngForm bound to
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
            this.django_heroes = data["heroes"];
            this.hero = {'name': undefined, 'abilities': undefined};
        });
    }

    // gets the hero object constructed from ngform and ngFor loop and then sends it
    //  to our djangoHeroService and once completed updates the list sent back from our JSON response
    removeHero(hero){
        let observable$ = this._djangoHeroesService.removeDjangoHero(hero);
        observable$.subscribe( data => {
            this.django_heroes = data["heroes"];
        });
    }

    // switches to update page instead of all hero page
    updateHeroes(event){
        this.allOn = false;
    }

    // fills form with updated hero when clicked on
    updateHero(hero){
        console.log(hero)
        this.updateHeroOn = true;
        this.hero.name = hero["name"];
        this.hero.abilities = hero["abilities"];
        this.updateDjangoHeroId = hero["id"];
    }

    // gets the hero information and pass it + the id to our service that will send an http request to update the hero and 
    // return the updated list once completed.
    updateDjangoHero(){
        let id = this.updateDjangoHeroId
        let hero = this.hero;
        let observable$ = this._djangoHeroesService.updateDjangoHero(hero, id);
        observable$.subscribe( data => {
            this.django_heroes = data["heroes"];
        });
    }
}
