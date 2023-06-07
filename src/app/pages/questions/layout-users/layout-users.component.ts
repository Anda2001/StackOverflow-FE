import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Tag_interface} from "../../../../utils/tag_interface";
import {HttpClient} from "@angular/common/http";
import {User_interface} from "../../../../utils/user_interface";
@Component({
  selector: 'app-layout-users',
  templateUrl: './layout-users.component.html',
  styleUrls: ['./layout-users.component.scss']
})
export class LayoutUsersComponent {
  users: User_interface[]|any;
  currentUser: any;

  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient) {}

  ngOnInit(): void {
    this.users = [];
    this.http.get("http://localhost:8080/users/getAll")
      .subscribe((data: any) => {
          console.log(data);
          this.users = data;

        }
      );
  }


  handleUserClick(user: any) {
    console.log("User:", user.title, user.userId)
    this.router.navigate(['/questions'], { queryParams: { user: user.userId} });

  }

  isCurrentUserAdmin(): boolean {
    const userJSON = sessionStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;
    return user && user.name === "admin";
  }



  handleBanClick(user: any) {

  }
}
