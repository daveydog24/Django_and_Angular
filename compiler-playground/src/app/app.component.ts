import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'compiler-playground';
  h1Style: boolean = false;

  firstClick() {
    this.h1Style = !this.h1Style;
  }
}
