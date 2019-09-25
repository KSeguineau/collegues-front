import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  messageError: string;

  constructor(private _dataService: DataService) { }

  connexion(login: string,mdp: string){
    this._dataService.connexion(login,mdp).subscribe(()=>{},(error => this.messageError = "informations de connexion invalides"));
    return false;
  }
  ngOnInit() {
  }

}
