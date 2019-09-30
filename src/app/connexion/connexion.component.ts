import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  messageError: string;

  constructor(private _dataService: DataService,private router:Router) { }

  connexion(login: string,mdp: string){
    this._dataService.connexion(login,mdp).subscribe(()=>{this.router.navigate(['/accueil'])},(error => this.messageError = "informations de connexion invalides"));
    return false;
  }
  ngOnInit() {
  }

}
