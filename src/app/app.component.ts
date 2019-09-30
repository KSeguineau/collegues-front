import { Component } from '@angular/core';
import {DataService} from "./services/data.service";
import {Router} from "@angular/router";




@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collegue = this._dataService.subjectCollegue;
  constructor(private _dataService:DataService, private router:Router){}
  navbarOpen = false;

  logout(){
  this._dataService.logout().subscribe(()=>{this.router.navigate(['/login'])});
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
