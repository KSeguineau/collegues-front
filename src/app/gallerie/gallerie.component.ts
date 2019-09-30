import { Component, OnInit } from '@angular/core';
import PhotosInterface from "../models/PhotosInterface";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  listePhotos = this._dataService.chercherPhotos();

  constructor(private _dataService: DataService,private _router:Router) { }

  afficherDetails(matricule:string){
    this._router.navigate(['/details',  matricule ]);
  }

  ngOnInit() {
  }

}
