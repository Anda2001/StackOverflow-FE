import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

  constructor(private router: Router) {}

  goToLogin() {
    //window.open('/login', '_self');
    console.log("go to login");
    this.router.navigate(['/login']);
    //this.router.navigateByUrl('/login');

  }

  goToRegister() {
    //window.open('/register', '_self');
    this.router.navigate(['/register']);
    //this.router.navigateByUrl('/register');
  }

  ngOnInit(): void {
  }



}
