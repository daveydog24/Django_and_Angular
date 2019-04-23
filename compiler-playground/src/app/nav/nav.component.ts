import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./component.scss']
})
export class NavComponent implements OnInit {
    navTitle: string = "My Practice App"
  constructor() { }

  ngOnInit() {
  }

}
