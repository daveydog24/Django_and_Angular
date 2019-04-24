import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'compiler-playground';
  ParentData;
  sendToChild;
  sentFromParent
  message;

  clicked() {
      this.sendToChild = this.ParentData;
  }


}
