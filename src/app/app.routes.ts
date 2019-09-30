import {Routes} from "@angular/router";
import { AcceuilComponent } from './acceuil/acceuil.component';
import {GallerieComponent} from "./gallerie/gallerie.component";
import {AproposComponent} from "./apropos/apropos.component";
import {DetailCollegueComponent} from "./detail-collegue/detail-collegue.component";

export const ROUTES: Routes = [
    { path: 'accueil', component: AcceuilComponent },
    { path: 'gallerie', component: GallerieComponent },
    { path: 'apropos', component: AproposComponent },
    { path: 'details/:matricule', component: DetailCollegueComponent }

];
