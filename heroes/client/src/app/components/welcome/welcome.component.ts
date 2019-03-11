import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { strictEqual } from 'assert';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
    errorSwitch;
    constructor(
        private _signInService: SignInService,
        private _router: Router
    ){}

    ngOnInit() {
        this._signInService.retrieveLoggedInUser(callback => {
            if (callback == undefined) {
                this.errorSwitch = true;
                this._router.navigate(['/home']);            
            }
            else {
                this.errorSwitch = false;
            }
        })
    }

    turnOn(linkName){
        let paragraphTag = document.getElementById(linkName);
        paragraphTag.style.color = "red";
        paragraphTag.style.fontWeight = "bold";
        paragraphTag.style.borderBottom = "2px solid red"
    }
    turnLinkHelpOff(linkName) {
        let paragraph = document.getElementById(linkName);
            paragraph.style.color = "white";
            paragraph.style.removeProperty("font-weight")
            paragraph.style.removeProperty("border-bottom")
    }
}
