import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SignInService {
    loggedInUser;

    constructor(private _http: HttpClient) { }

    // WHEN CALLED IT CLEARS THE LOGGED IN USER
    logOutUser(){
        // #####################  EVENTUALL THIS WILL ALL BE DOWN WITH SESSION.   ###########################
        this.loggedInUser = undefined;
    }

    // WHEN CALLED IT RETURNS THE CURRENT USER INFO LOGGED IN IF ANY.
    retrieveLoggedInUser(callback){
        return callback(this.loggedInUser);
    }

    // SENT FROM THE SIGN IN PAGE THIS WILL UPDATE THE CURRENT LOGGED IN USER.
    updateLoggedInUser(user){
        this.loggedInUser = user;
    }

    // USES DJANGO AND HTTP ROUTING TO LOGIN IN A USER IF VALIDATED FROM OUR DATABASE.
    logInUser(user){
        return this._http.post('/user/login', user)
    }
    
    // USES DJANGO AND HTTP ROUTING TO ADD A NEW USER IN OUR DATABASE WITH PASSED IN FORM DATA.
    addUser(user){
        return this._http.post('/user/add', user);
    }
    
    //  ***********************************************************************************
                    // experimental uses or stuff to be delete later
    //  ***********************************************************************************

    // we shouldnt need to get all users ("if so not all the senstive information at least")
    getUsers(){
        return this._http.get('/users/all');
    }
}
