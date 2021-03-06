import {Component, EventEmitter, Input, OnInit, Output,AfterViewChecked} from '@angular/core';
import Collegue from "../../models/Collegue";
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-modifier-collegue',
  templateUrl: './modifier-collegue.component.html',
  styleUrls: ['./modifier-collegue.component.css']
})
export class ModifierCollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  @Input() collegueBrouillon;
  @Output() childEvent = new EventEmitter();
  messageError:string;

  constructor(private _dataService: DataService) { }



  ngOnInit() {
  }

  annuler(){
      this.childEvent.next(1);
  }

  clickValider(){
    this.collegue.email = this.collegueBrouillon.email;
    this.collegue.photoUrl = this.collegueBrouillon.photoUrl;
    this._dataService.modifierCollegue(this.collegue).subscribe(()=>{this.childEvent.next(1);},(err)=>this.messageError = "impossible de modifier le collegue");

  }
}
