import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  collegue = this._dataService.subjectCollegue;
  constructor(private _dataService:DataService){}

  ngOnInit() {
  }

}
