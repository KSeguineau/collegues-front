import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Collegue from "../../models/Collegue";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modifier-collegue',
  templateUrl: './modifier-collegue.component.html',
  styleUrls: ['./modifier-collegue.component.css']
})
export class ModifierCollegueComponent implements OnInit {

  @Input() collegue: Observable<Collegue>;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickValider(){
    this.childEvent.next(1);
  }
}
