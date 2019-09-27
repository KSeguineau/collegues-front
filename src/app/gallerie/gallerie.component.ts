import { Component, OnInit } from '@angular/core';
import PhotosInterface from "../models/PhotosInterface";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  listePhotos = this._dataService.chercherPhotos();

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
