import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  messageError:string;
  listeMatricule: string[];
  constructor(private _dataService:DataService) { }

  rechercherParNom(nom: string){
    this._dataService.chercherMatricules(nom).subscribe((value => this.listeMatricule = value));
  }

  rechercherCollegue(matricule: string){
    this._dataService.chercherCollegue(matricule).subscribe(()=>{},(error) => this.messageError = "Impossible de recuperer le collegue");
  }
  ngOnInit() {
  }
}
