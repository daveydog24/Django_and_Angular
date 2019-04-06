import { Component, OnInit } from '@angular/core';
import { SignInService } from './services/sign-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    signedIn = false;
    title = "David Wukelic's Home App Component";
    linkNameOn = false;
    LinkName = "Helpful Links Above";
    backdropOn = false;
    modalOn = false;
    dropDownOn = false;
    blurredOn = false;
    userSignedIn = false;
    // signInError = false;


    constructor(
        private _signInService: SignInService,
        private _router: Router
    ){}


    ngOnInit() {
        this._signInService.retrieveLoggedInUser(callback => {
            if (callback == undefined) {
                this._router.navigate(['/home']);            
            }
            else {
                this.signedIn = true;
            }
        })
    }

    signOut(){
        this._signInService.retrieveLoggedInUser(callback => {
            if (callback == undefined) {
                this.signedIn =  false;
            }
            else {
                this._signInService.logOutUser();
                this.signedIn = true;
                this._router.navigate(['/signin']);            
            }
        })            
    }
    signIn(){
        this._signInService.retrieveLoggedInUser(callback => {
            if (callback == undefined) {
                this.signedIn = false;
                this._router.navigate(['/signin']);            
            }
            else {
                this.signedIn = true;
            }
        })       
    }

    passLink(string){
        this.linkNameOn = true;
        this.LinkName = string;
    }

    turnLinkHelpOff(){
        this.linkNameOn = false;
    }
    
    toggle(){
        if (this.dropDownOn == false) {
            this.dropDownOn = true;
        } else {
            this.dropDownOn = false;
        }
        if (this.backdropOn == false) {
            this.backdropOn = true;
        } else {
            this.backdropOn = false;
        }
    }
    turnOFFswitches(){
        this.modalOn = false;
        this.backdropOn = false;
        this.dropDownOn = false;
        this.blurredOn = false;
    }
    signInswitch(){
        this.blurredOn = false;
        this.modalOn = false;
        this.backdropOn = false;
        this._router.navigate(['/signin']);    
    }
    routeTo(clickedLink){
        this._signInService.retrieveLoggedInUser(callback => {
            if (callback != undefined) {
                let navigate = "/" + `${clickedLink}`;
                this.userSignedIn = true;
                this._router.navigate([navigate]); 
            }
            else {
                this.blurredOn = true;
                this.modalOn = true;      
            }
        })
    }
}

// WILL HAVE TO USE INPUT AND OUTPUT LATER TO COMMUNICATE FOR AN ON AND OFF SWTICH
