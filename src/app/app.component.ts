import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as users_dummy from "./../utils/dummy_users.json"
import {User_interface} from "../utils/user_interface";
import {UserComponent} from "./pages/user/user.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fe-stackoverflow';
  static users: User_interface[] = (users_dummy as any).default;
  static current_user: User_interface = {name: "", email: "", password: ""};
  constructor(private router: Router) {}

  static setCurrentUser(user: User_interface) {
    AppComponent.current_user.name = user.name;
    AppComponent.current_user.email = user.email;
    AppComponent.current_user.password = user.password;
  }

  static getCurrentUser() {
    return AppComponent.current_user;
  }
  ngOnInit(): void {
  }

}
