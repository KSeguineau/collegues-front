import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbDateAdapter, NgbDateNativeAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';
import { AfficherCollegueComponent } from './collegue/afficher-collegue/afficher-collegue.component';
import { ModifierCollegueComponent } from './collegue/modifier-collegue/modifier-collegue.component';
import { CreerCollegueComponent } from './collegue/creer-collegue/creer-collegue.component';
import { FormsModule }   from '@angular/forms';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { ROUTES } from './app.routes'
import {RouterModule} from "@angular/router";
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';


@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    ConnexionComponent,
    AfficherCollegueComponent,
    ModifierCollegueComponent,
    CreerCollegueComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    AcceuilComponent,
    GallerieComponent,
    AproposComponent,
    DetailCollegueComponent
  ],
  imports: [
    BrowserModule,NgbModule,HttpClientModule,FormsModule,RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
