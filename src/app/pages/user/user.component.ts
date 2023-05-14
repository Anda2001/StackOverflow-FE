import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

    users = AppComponent.users;
    current_user = AppComponent.getCurrentUser();

    constructor() { }

    ngOnInit(): void {
      console.log("@@@@@@@@")
      console.log(AppComponent.getCurrentUser())
    }
}
