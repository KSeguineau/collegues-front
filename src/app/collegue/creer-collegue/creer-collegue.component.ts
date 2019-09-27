import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import Collegue from "../../models/Collegue";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-creer-collegue',
    templateUrl: './creer-collegue.component.html',
    styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

    messageError: string;

    collegue: Collegue = new Collegue(null, null, null, null, null, null);
    @Output() childEvent = new EventEmitter();

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
    }

    annuler() {
        this.childEvent.next(1);
    }

    clickCreer() {
        this._dataService.creerCollegue(this.collegue).subscribe(() => {
            this.childEvent.next(1);
        }, (error => this.messageError = "impossible de creer le collègue"))

    }
}
