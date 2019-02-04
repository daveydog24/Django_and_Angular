import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SignInService {
    loggedInUser;

    constructor() { }


    updateLoggedInUser(user){
        this.loggedInUser = user;
    }
    retrieveLoggedInUser(callback){
        return callback(this.loggedInUser);
    }


}
