import {Routes} from "@angular/router";
import { AcceuilComponent } from './acceuil/acceuil.component';
import {GallerieComponent} from "./gallerie/gallerie.component";
import {AproposComponent} from "./apropos/apropos.component";
import {DetailCollegueComponent} from "./detail-collegue/detail-collegue.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {ConnexionGuardService} from "./services/connexion-guard.service";

export const ROUTES: Routes = [
    { path: 'login', component: ConnexionComponent },
    { path: 'accueil',canActivate: [ConnexionGuardService], component: AcceuilComponent },
    { path: 'gallerie',canActivate: [ConnexionGuardService], component: GallerieComponent },
    { path: 'apropos',canActivate: [ConnexionGuardService], component: AproposComponent },
    { path: 'details/:matricule',canActivate: [ConnexionGuardService], component: DetailCollegueComponent }





];
