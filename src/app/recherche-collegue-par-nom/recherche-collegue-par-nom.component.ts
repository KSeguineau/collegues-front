import { Component, OnInit } from '@angular/core';
import {listeMatricule} from "../mock/matricules.mock";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricule: string[];
  constructor(private _dataService:DataService) { }

  rechercherParNom(nom: string){
    console.log(nom);
    this.listeMatricule = this._dataService.chercherMatricules();
  }
  ngOnInit() {
  }

}
