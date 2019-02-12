import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-github-battle',
    templateUrl: './github-battle.component.html',
    styleUrls: ['./github-battle.component.css']
})
export class GithubBattleComponent implements OnInit {
    // buttonON = false;
    buttonON = true;
    constructor(
        private _signInService: SignInService,
        private _router: Router
    ){}

    ngOnInit() {}
    // ngOnInit() {
    //     this._signInService.retrieveLoggedInUser(callback => {
    //         if (callback != undefined) {
    //             this.buttonON = true;
    //         }
    //         else {
    //             this.buttonON = false;
    //             this._router.navigate(['/home']);            
    //         }
    //     })
    // }



}
