import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private router: Router) {}

  //users = AppComponent.users;

  goToQuestions() {

    AppComponent.users.map((user) => {
      console.log(user.name)
      console.log(user.email)
      console.log(user.password)
      console.log("################")
    })


    // Retrieve the entered values from the form
    const enteredUsername = (<HTMLInputElement>document.getElementById('username')).value;
    const enteredPassword = (<HTMLInputElement>document.getElementById('password')).value;


    AppComponent.users.map((user) => {
      if (user.name === enteredUsername && user.password === enteredPassword) {
            AppComponent.setCurrentUser(user);
          console.log("Current user:", AppComponent.getCurrentUser())
              this.router.navigate(['/questions'], {
                queryParams: {
                  currentUser: user.name
                }
              });
            } else {
              console.log('Invalid username or password');
            }
          })
  }

  }



