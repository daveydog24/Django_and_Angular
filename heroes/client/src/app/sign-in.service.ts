import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SignInService {
    loggedInUser;

    constructor(private _http: HttpClient) { }

    logOutUser(){
        this.loggedInUser = undefined;
    }

    updateLoggedInUser(user){
        this.loggedInUser = user;
    }
    
    retrieveLoggedInUser(callback){
        return callback(this.loggedInUser);
    }

    // uses django and http routing to pass user info, check and validates the user exist and sends the info back
    logInUser(user){
        return this._http.post('/user/login', user)
    }
    // uses django and http routing to post a new user in our databse.
    addUser(user){
        return this._http.post('/user/add', user);
    }
    
//  *************************************************
    // experimental uses or stuff to be delete later

    // we shouldnt need to get all users ("if so not all the senstive information at least")
    getUsers(){
        return this._http.get('/users/all');
    }
}
