import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
    displayUser;

    constructor(private _signInService: SignInService) { }

    ngOnInit() {
        this._signInService.retrieveLoggedInUser(retrievedData => {
            this.displayUser = retrievedData;
            console.log(this.displayUser)
            alert(this.displayUser)
        })
    }

    signOut(){
        alert("You are all signed out, have a great day!")
        console.log("this is where we should log out and redirect back to the sign in page")
    }
}
