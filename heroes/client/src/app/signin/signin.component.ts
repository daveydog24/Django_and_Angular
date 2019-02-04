import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    loginOn = true;
    user = {
        'firstname': undefined,
        'lastname': undefined,
        'email': undefined,
        'password': undefined
    };
    newUser = {
        'loginemail': undefined,
        'loginpassword': undefined
    };

    constructor() { }

    ngOnInit() {
    }

    login(){
        console.log("in login")
        this.loginOn = true;
    }
    registration(){
        console.log("in registration")
        this.loginOn = false;
    }

}
