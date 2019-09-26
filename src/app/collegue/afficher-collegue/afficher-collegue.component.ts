import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Collegue from "../../models/Collegue";
import {Observable} from "rxjs";

@Component({
  selector: 'app-afficher-collegue',
  templateUrl: './afficher-collegue.component.html',
  styleUrls: ['./afficher-collegue.component.css']
})
export class AfficherCollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickCreer(){
    this.childEvent.next(3);
  }

  clickModifier(){
    this.childEvent.next(2);
  }
}
