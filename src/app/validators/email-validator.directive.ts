import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable,of} from "rxjs";
import {DataService} from "../services/data.service";
import {map} from "rxjs/operators";

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator{

  @Input() emailCollegue:string;
  constructor(private _dataService: DataService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{

    return this._dataService.chercherMatriculesparEmail(control.value).pipe(map((tableau)=>{
      if(tableau.length===0 || control.value===this.emailCollegue){
        return null;
      }
      else {
        return {emailInvalide:true};
      }
    }));

  }



}
