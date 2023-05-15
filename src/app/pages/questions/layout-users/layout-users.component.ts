import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-layout-users',
  templateUrl: './layout-users.component.html',
  styleUrls: ['./layout-users.component.scss']
})
export class LayoutUsersComponent {

  constructor(private router: Router) {}

  users = AppComponent.users;




}
