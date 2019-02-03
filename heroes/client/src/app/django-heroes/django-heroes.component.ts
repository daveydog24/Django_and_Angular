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
    allOn = true;
    updateHeroOn = false;
    updateDjangoHeroId = undefined;

    ngOnInit() {
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
    // fills form with updated hero clicked on
    updateHero(hero){
        console.log(hero)
        this.updateHeroOn = true;
        this.hero.name = hero["name"];
        this.hero.abilities = hero["abilities"];
        this.updateDjangoHeroId = hero["id"];
    }
    updateDjangoHero(){
        let id = this.updateDjangoHeroId
        let hero = this.hero;
        console.log("hero id: ", id)
        console.log("hero: ", hero)

    }
}
