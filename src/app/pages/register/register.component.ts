import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


import {AppComponent} from "../../app.component";
import {User_interface} from "../../../utils/user_interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  users: User_interface[] = AppComponent.users;

  constructor(private router: Router) {
  }

  goToQuestions() {


    // Retrieve the entered values from the form
    const enteredUsername = (<HTMLInputElement>document.getElementById('username')).value;
    const enteredPassword = (<HTMLInputElement>document.getElementById('password')).value;
    const enteredEmail = (<HTMLInputElement>document.getElementById('email')).value;
    const reEnteredPassword = (<HTMLInputElement>document.getElementById('repassword')).value;

    // Verify the entered username and password

    const existingUser = this.users.find(user => user.name === enteredUsername);
    if (existingUser) {
      console.log('Username is already taken');
      return;
    }


    if (reEnteredPassword === enteredPassword && enteredUsername != "" && enteredPassword != "" && enteredEmail != "" && enteredEmail.includes("@") && enteredEmail.includes(".")) {
      // Redirect to the questions page if the credentials are valid
      this.router.navigate(['/login']);
      //console.log('Valid input data');
    } else {
      // Display an error message or perform other actions if the credentials are invalid
      console.log('Invalid input data');
      return;
    }

    const newUser: User_interface = {
      name: enteredUsername,
      password: enteredPassword,
      email: enteredEmail
    };
    AppComponent.users.map((user) => {
      console.log(user.name)
      console.log("$$$$$$$$$$$$")
    })
    // Add the new user to the users array
    this.users.push(newUser);

    AppComponent.users.map((user) => {
      console.log(user.name)
      console.log("$$$$$$$$$$$$")
    })
  }


}

