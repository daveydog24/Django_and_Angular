import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { Router } from '@angular/router';

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
}
