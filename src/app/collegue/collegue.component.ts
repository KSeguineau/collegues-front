import {Component, Input, OnInit} from '@angular/core';
import Collegue from "../models/Collegue";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor() { }

  clickModifier(){
    console.log("Modification du collègue");
  }

  clickCreer(){
    console.log("Creation du collègue");
  }

  ngOnInit() {
  }

}
