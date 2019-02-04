import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    signedIn = true;
    title = "David Wukelic's Home App Component";
    constructor() {}

    signOut(){
        this.signedIn = false;
    }
}
