import {Injectable} from '@angular/core';
import Collegue from "../models/Collegue";
import {listeMatricule} from "../mock/matricules.mock";
import {collegueMock} from "../mock/collegues.mock";
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from 'rxjs'
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _subjectConnecte = new BehaviorSubject(false);

    constructor(private _httpClient: HttpClient) {
    }


  get subjectConnecte(): BehaviorSubject<boolean> {
    return this._subjectConnecte;
  }

  connexion(login: string, mdp: string): Observable<void> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            withCredentials: true
        };
        return this._httpClient.post<void>(environment.backendUrl + "/auth", {login: login, mdp: mdp}, httpOptions).pipe(tap(()=>this.subjectConnecte.next(true)))

    }

    chercherCollegue(): Collegue {
        return collegueMock;
    }

    chercherMatricules(): string[] {
        return listeMatricule;
    }

}
