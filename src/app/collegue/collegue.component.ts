import {Component, Input, OnInit} from '@angular/core';
import Collegue from "../models/Collegue";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  collegue = this._dataService.subjectCollegue;
  private _etatComponent: number = 1;

  constructor(private _dataService:DataService) { }


  get etatComponent(): number {
    return this._etatComponent;
  }

  changerEtatComponent(value: number) {
    this._etatComponent = value;
  }

  clickModifier(){
    this._etatComponent = 2;
  }

  clickCreer(){
    console.log("Creation du collègue");
  }

  clickValider(){
    this._etatComponent = 1
  }

  ngOnInit() {
  }

}
