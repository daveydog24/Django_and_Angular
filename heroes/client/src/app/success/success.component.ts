import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
    displayUser;
    users;
    registered;

    constructor(
        private _router: Router, 
        private _signInService: SignInService
    ){}

    ngOnInit() {
        this._signInService.retrieveLoggedInUser(retrievedData => {
            this.displayUser = retrievedData;
            this.getAllUsers()
            let registered_check = this._signInService.getUserSignInMethod();
            this.registered = registered_check;
        })

    }
    getAllUsers() {
        let observable$ = this._signInService.getUsers();
        observable$.subscribe( data => {
            this.users = data['users'];
        });
    }

    signOut(){
        // alert("You are all signed out, have a great day!")
        // this should go log the user and on completion reoute the user
        this._signInService.logOutUser();
        this._router.navigate(['/signin']);
    }
}
