import {Component, Input, OnInit} from '@angular/core';
import Collegue from "../models/Collegue";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  collegue: Collegue = new DataService().chercherCollegue();
  modification: boolean = false;

  constructor() { }

  clickModifier(){
    this.modification = true;
  }

  clickCreer(){
    console.log("Creation du collègue");
  }

  clickValider(){
    this.modification = false
  }

  ngOnInit() {
  }

}
