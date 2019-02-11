import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../../services/sign-in.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    loginOn: boolean = true;
    djangoHTTPhero;
    user = {
        'firstname': "",
        'lastname': "",
        'email': "",
        'password': ""
    };
    returnUser = {
        'loginemail': "",
        'loginpassword': ""
    };
    errors: Array<any> = []

    constructor(
        private router: Router, 
        private _signInService: SignInService
    ){}

    ngOnInit() {
    }

    // ACTIVATES LOGIN SWITCH AND FORM
    login(){
        this.loginOn = true;
    }

    // DEACTIVATES LOGIN SWITCH AND LOGIN FORM AND ACTIVATES REGISTRATION FORM
    registration(){
        this.loginOn = false;
    }

    // CHECKS TO SEE IF RETURNING USER IS IN THE DATABASE, STORES LOGGED IN USER AND NAVIGATES TO SUCCESS
    loginUser(){
        this.errors = [];
        let observable$ = this._signInService.logInUser(this.returnUser);
        observable$.subscribe(data => {
            if (data['error']) {
                this.errors.push(data['error'])
            } else {
                this.djangoHTTPhero = data["user"];
                this._signInService.updateLoggedInUser(this.djangoHTTPhero);
                this.router.navigate(['/success']);
            }
        });
    }
        
    // REGISTERS NEW USER IN THE DATABASE, STORES LOGGED IN USER AND NAVIGATES TO SUCCESS
    registerHTTP_hero(){
        this.errors = []; //emptys out any old errors
        let observable$ = this._signInService.addUser(this.user); //sets up an observable to listen to when addUser finishes
        observable$.subscribe( data => {
            if (data['error']) {
                this.errors.push(data['error']) // if an error was sent back it will store it and display it
            } else {
            this.djangoHTTPhero = data["user"]; 
            this._signInService.updateLoggedInUser(this.djangoHTTPhero); //updates the currently logged in user
            this.router.navigate(['/success']); // navigates to the success page
            }
        });        
    }
}
// *****************************************************************************************
// old working services


// loginUser(){
//     console.log(this.newUser)
//     console.log(this.newUser['loginemail'])
//     console.log(this.newUser['loginpassword'])
//     should make this a promise eventually and make sure user is updated and in the system before rerouting.
//     this._signInService.logInUser(this.newUser)
//     this.router.navigate(['/success']);
// }

// registerUser(){
//     console.log(this.user)
//     console.log(this.user['firstname'])
//     console.log(this.user['lastname'])
//     console.log(this.user['email'])
//     console.log(this.user['password'])

    // should make this  a promise eventually and make sure user is updated before rerouting.
    // this._signInService.updateLoggedInUser(this.user)
    // this.router.navigate(['/success']);
    // this.router.navigateByUrl('<pathDefinedInRouteConfig>');
// }
