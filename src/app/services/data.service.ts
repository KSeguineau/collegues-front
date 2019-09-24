import { Injectable } from '@angular/core';
import Collegue from "../models/Collegue";
import {listeMatricule} from "../mock/matricules.mock";
import {collegueMock} from "../mock/collegues.mock";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  chercherCollegue(): Collegue{
    return collegueMock;
  }

  chercherMatricules(): string[]{
    return listeMatricule;
  }
}
