import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {DataService} from "./data.service";
import {Observable, of} from "rxjs";
import {catchError,map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ConnexionGuardService implements CanActivate {

  constructor(private router: Router, private _dataService:DataService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree> {
    // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login

    return this._dataService.verifierConnexion().pipe(
        map(()=>{return true})
        ,catchError((err)=>{ return of(this.router.parseUrl('/login'))}));

  }
}
