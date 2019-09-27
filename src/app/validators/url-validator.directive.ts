import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective implements Validator {

  constructor() { }


  validate(control: AbstractControl): ValidationErrors | null {
    const chaine: string = control.value;
    if(chaine!=null && chaine.startsWith("http")){
      return null;
    }
    return {urlInvalide: true}
  }

}
