import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  private User: any;

    constructor() { }

    ngOnInit(): void {
        console.log(sessionStorage.getItem('user'));
      this.User
      let user = JSON.parse(sessionStorage.getItem('user') || '{}');
    }
}
