import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    loginOn = true;
    user = {
        'firstname': "",
        'lastname': "",
        'email': "",
        'password': ""
    };
    newUser = {
        'loginemail': "",
        'loginpassword': ""
    };
    displayUser;

    constructor(private router: Router, private _signInService: SignInService) { }

    ngOnInit() {
    }

    // activates login button and form
    login(){
        this.loginOn = true;
    }
    // deactivates login back which activates registration form
    registration(){
        this.loginOn = false;
    }
    loginUser(){
        console.log(this.newUser)
        console.log(this.newUser['loginemail'])
        console.log(this.newUser['loginpassword'])
    }
    registerUser(){
        console.log(this.user)
        console.log(this.user['firstname'])
        console.log(this.user['lastname'])
        console.log(this.user['email'])
        console.log(this.user['password'])

        // should make this  a promise eventually and make sure user is updated before rerouting.
        this._signInService.updateLoggedInUser(this.user)
        this.router.navigate(['/success']);
        // this.router.navigateByUrl('<pathDefinedInRouteConfig>');
    }

}
