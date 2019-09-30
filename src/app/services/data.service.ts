import {Injectable} from '@angular/core';
import Collegue from "../models/Collegue";
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from 'rxjs'
import {tap,flatMap} from 'rxjs/operators';
import PhotosInterface from "../models/PhotosInterface";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _subjectConnecte = new BehaviorSubject(false);
    private _subjectCollegue: BehaviorSubject<Collegue> = new BehaviorSubject(undefined);
    private _listeCollegueConnus: Map<string,Collegue> = new Map<string, Collegue>();

    constructor(private _httpClient: HttpClient) {
      this.verifierConnexion();
    }


  get subjectConnecte(): Observable<boolean> {
    return this._subjectConnecte.asObservable();
  }

  get subjectCollegue(): Observable<Collegue> {
    return this._subjectCollegue.asObservable();
  }

  connexion(login: string, mdp: string): Observable<void> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            withCredentials: true
        };
        return this._httpClient.post<void>(environment.backendUrl + "/auth", {login: login, mdp: mdp}, httpOptions).pipe(tap(()=>this._subjectConnecte.next(true)))

    }

    chercherMatricules(nom:string):Observable<string[]>{
      this._listeCollegueConnus.clear();
      return this._httpClient.get<string[]>(environment.backendUrl+"/collegues?nom="+nom,{withCredentials:true});
    }

    chercherMatriculesparEmail(email:string):Observable<string[]>{
        return this._httpClient.get<string[]>(environment.backendUrl+"/collegues?email="+email,{withCredentials:true})
    }

    chercherCollegue(matricule:string): Observable<Collegue> {
      const collegueConnu:Collegue = this._listeCollegueConnus.get(matricule);
      if(collegueConnu){
        this._subjectCollegue.next(collegueConnu);
        return of(collegueConnu)
      }else {
        return this._httpClient.get<Collegue>(environment.backendUrl + "/collegues/" + matricule, {withCredentials: true})
            .pipe(tap((value) => {this._listeCollegueConnus.set(value.matricule,value);this._subjectCollegue.next(value);}));
      }
      }

    verifierConnexion():Observable<Collegue>{
      return this._httpClient.get<Collegue>(environment.backendUrl+"/auth/user",{withCredentials:true})
          .pipe(flatMap((value => this.chercherCollegue(value.matricule) )),tap((collegue)=>{this._subjectConnecte.next(true);
              this._subjectCollegue.next(collegue);}));
    }

    modifierCollegue(collegue:Collegue):Observable<Collegue>{
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            withCredentials: true
        };
        return this._httpClient.patch<Collegue>(environment.backendUrl+"/collegues/"+collegue.matricule,collegue,httpOptions).pipe(tap((collegue)=>this._subjectCollegue.next(collegue)));

    }

    creerCollegue(collegue:Collegue):Observable<Collegue>{
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            withCredentials: true
        };
        return this._httpClient.post<Collegue>(environment.backendUrl+"/collegues",collegue,httpOptions).pipe(tap((collegue)=>this._subjectCollegue.next(collegue)));
    }

    chercherPhotos():Observable<PhotosInterface[]>{
        return this._httpClient.get<PhotosInterface[]>(environment.backendUrl+"/collegues/photos",{withCredentials:true});
    }

    logout():Observable<void>{
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            withCredentials: true
        };
        return this._httpClient.post<void>(environment.backendUrl+"/logout",{},httpOptions);
    }
}
