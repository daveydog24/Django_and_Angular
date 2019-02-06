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
    displayUser;
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
        let observable$ = this._signInService.logInUser(this.returnUser);

        observable$.subscribe(data => {
            if (data["user"]) {
                if (this.returnUser.loginemail == data["user"].email && this.returnUser.loginpassword == data["user"].password ){
                    alert("they match!!!")
                } else {
                    alert("password and email didnt match")
                }
                console.log(data)
                alert("got back user info")
                this.displayUser = data["user"];
                this.router.navigate(['/success']);
            } else {
                alert("no user info sent back or not correctly")
                console.log(data)
            }
        });        
    }

    registerHTTP_hero(){
        // console.log(this.user)
        // console.log(this.user['firstname'])
        // console.log(this.user['lastname'])
        // console.log(this.user['email'])
        // console.log(this.user['password'])
        
        let observable$ = this._signInService.addUser(this.user);
        observable$.subscribe( data => {
            this.djangoHTTPhero = data["users"];
            alert("you just got your new hero in the databaSe i think....")
            alert(this.djangoHTTPhero)
            console.log(this.djangoHTTPhero)
        });        
        this.router.navigate(['/success']);
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
