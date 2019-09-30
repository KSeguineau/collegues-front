import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import Collegue from "../models/Collegue";
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";
import {flatMap, map} from "rxjs/operators";

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {
  collegue:Observable<Collegue>;

  constructor(private _dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.collegue =this.route.paramMap.pipe(flatMap((params: ParamMap) => {
      const matricule = params.get('matricule');
      return this._dataService.chercherCollegue(matricule);
    }));
  }

}
