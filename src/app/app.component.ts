import { Component } from '@angular/core';
import {DataService} from "./services/data.service";




@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  connecte = this._dataService.subjectConnecte;
  collegue = this._dataService.subjectCollegue;
  constructor(private _dataService:DataService){}


}
