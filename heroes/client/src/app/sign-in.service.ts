import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SignInService {
    loggedInUser;

    constructor() { }

    logInUser(user){
        // eventually should recieve a callback as well from a promise so we can perform success and reject scenarios...  

        // check data base to see if the user is in the system

            // if not return with errors

            // if successfull return success and the rest of users information
            
            // then update current user to be logged in  ---> 
            this.updateLoggedInUser(user);
    }
    updateLoggedInUser(user){
        this.loggedInUser = user;
    }
    retrieveLoggedInUser(callback){
        return callback(this.loggedInUser);
    }


}
