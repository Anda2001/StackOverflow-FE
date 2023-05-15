import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {User_interface} from "../../../../utils/user_interface";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {
  currentUser: User_interface | null = null;

  constructor(private router: Router) {}



  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("@@@@@@@@")
        console.log(AppComponent.current_user.length);
        this.currentUser = AppComponent.current_user[AppComponent.current_user.length - 1];
        console.log(this.currentUser);
      }
    });
  }
}
