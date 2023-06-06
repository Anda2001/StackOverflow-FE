import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


import {AppComponent} from "../../app.component";
import {User_interface} from "../../../utils/user_interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  async ngOnInit(): Promise<void> {
    let response = this.http.get("http://localhost:8080/users/getAll");
    response.subscribe((data: any) => {
      console.log(data);
      this.users = data.map((user: any) => {
        return {
          userId: user.userId,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        };
      });
    });
  }

  users: User_interface[]|any;

  constructor(private router: Router, private http: HttpClient) {
  }

  goToQuestions() {


    // Retrieve the entered values from the form
    const enteredUsername = (<HTMLInputElement>document.getElementById('username')).value;
    console.log(enteredUsername);
    const enteredPassword = (<HTMLInputElement>document.getElementById('password')).value;
    const enteredEmail = (<HTMLInputElement>document.getElementById('email')).value;
    const reEnteredPassword = (<HTMLInputElement>document.getElementById('repassword')).value;

    // Verify the entered username and password

    const existingUser = this.users.find((user: User_interface) => user.name === enteredUsername);
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

    const newUser: any= {
      userId: this.users.length + 1,
      firstName: enteredUsername,
      password: enteredPassword,
      email: enteredEmail,
      role: "user" // default role
    };
    console.log(newUser);

    if(newUser.firstName === "admin"){
      newUser.role = "admin";
    }


    // Add the new user to the users table
    this.http.post("http://localhost:8080/users/create", newUser).subscribe((data: any) => {
      console.log(data);

    });
  }


}

