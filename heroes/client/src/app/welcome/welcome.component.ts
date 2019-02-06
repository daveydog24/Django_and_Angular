import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
    constructor(
        private _signInService: SignInService,
        private _router: Router
    ){}

    ngOnInit() {
    }

    signOut(){
        this._signInService.logOutUser();
        this._router.navigate(['/signin']);
    }
}
