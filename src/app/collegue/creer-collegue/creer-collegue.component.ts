import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import Collegue from "../../models/Collegue";

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  collegue:Collegue;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickCreer(){
    this.childEvent.next(1);
  }
}
