import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {User_interface} from "../../../utils/user_interface";
import {HttpClient} from "@angular/common/http";
//import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent implements OnInit{

  users:User_interface[]|any;
  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/users/getAll");
    response.subscribe((data: any) => {
      console.log(data);
      this.users = data.map((user: any) => {
        return {
          userId: user.userId,
          name: user.firstName,
          email: user.email,
          password: user.password,
          role: user.role,
          banned : user.banned
        };
      });
    });

  }
  constructor(private router: Router, public http:HttpClient) {

  }



  goToQuestions() {
    const enteredUsername = (<HTMLInputElement>document.getElementById('username')).value;
    const enteredPassword = (<HTMLInputElement>document.getElementById('password')).value;

    const matchedUser = this.users.find((user: User_interface | any) => {
      return user.name === enteredUsername && user.password === enteredPassword;
    });

    if (matchedUser){
      if( matchedUser.banned !== true) {
        // Store the matched user in session storage
        console.log("Current user:", matchedUser.banned);
        sessionStorage.setItem('user', JSON.stringify(matchedUser));
        console.log("Current user:", matchedUser);
        this.router.navigate(['/questions']);
      } else {
        this.showErrorNotification("You are banned");
      }
    }else{
      this.showErrorNotification("Invalid username or password");
    }
  }

  private showErrorNotification(message: string) {
    //this.snackBar.showNotification(message, "danger");
    console.log(message);
  }

  }



