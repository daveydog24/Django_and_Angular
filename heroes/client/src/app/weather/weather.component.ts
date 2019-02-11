import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    Burbank;
    Dallas;
    Chicago;
    Oakland;
    Washington_DC
    Seattle;

    constructor(
        private _signInService: SignInService,
        private _router: Router
    ){}
    
    ngOnInit() {
        this._signInService.retrieveLoggedInUser(callback => {
            if (callback != undefined) {
                this.Seattle = true;
            }
            else {
                this._router.navigate(['/home']);            
            }
        })
    }

    // passCity(city){
    //     console.log(city);
    //     alert(city)
    //     this.city = city;
    // }
    burbank(){
        this.Burbank = true;
        this.Dallas = undefined;
        this.Chicago = undefined;
        this.Oakland = undefined;
        this.Washington_DC = undefined;
        this.Seattle = undefined;
    }
    dallas(){
        this.Burbank = undefined;
        this.Dallas = true;
        this.Chicago = undefined;
        this.Oakland = undefined;
        this.Washington_DC = undefined;
        this.Seattle = undefined;
    }
    chicago(){
        this.Burbank = undefined;
        this.Dallas = undefined;
        this.Chicago = true;
        this.Oakland = undefined;
        this.Washington_DC = undefined;
        this.Seattle = undefined;
    }
    oakland(){
        this.Burbank = undefined;
        this.Dallas = undefined;
        this.Chicago = undefined;
        this.Oakland = true;
        this.Washington_DC = undefined;
        this.Seattle = undefined;
    }
    washington_dc(){
        this.Burbank = undefined;
        this.Dallas = undefined;
        this.Chicago = undefined;
        this.Oakland = undefined;
        this.Washington_DC = true;
        this.Seattle = undefined;
    }
    seattle(){
        this.Burbank = undefined;
        this.Dallas = undefined;
        this.Chicago = undefined;
        this.Oakland = undefined;
        this.Washington_DC = undefined;
        this.Seattle = true;
    }


}
