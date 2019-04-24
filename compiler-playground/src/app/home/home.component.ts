import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @Input('dataFromParent') public parentData;
    @Output() public childEvent = new EventEmitter;
    sendToParent;

    constructor() { }

    ngOnInit() {
    }

    clicked() {
        this.childEvent.emit(this.sendToParent)
    }

}
