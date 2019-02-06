import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    signedIn = true;
    title = "David Wukelic's Home App Component";

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
        this.signedIn = true;
    }
}

// WILL HAVE TO USE INPUT AND OUTPUT LATER TO COMMUNICATE FOR AN ON AND OFF SWTICH
// MAKE SURE TO CHECK HTML TOO

// import { Component, OnInit } from '@angular/core';
// import { SignInService } from './sign-in.service';


// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit {
//     signedIn = false;
//     signedIn = true;
//     title = "David Wukelic's Home App Component";
//     constructor(private _signInService: SignInService) {}

//     ngOnInit() {
//         this._signInService.retrieveLoggedInUser(callback => {
//             if (callback != undefined) {
//                 this.signedIn = true;
//             }
//             else {
//                 this.signedIn = false;           
//             }
//         })
//     }

//     signOut(){
//         this.signedIn = false;
//     }
// }
