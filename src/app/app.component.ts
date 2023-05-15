import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as users_dummy from "./../utils/dummy_users.json"
import * as questions_dummy from "./../utils/dummy_questions.json"
import {User_interface} from "../utils/user_interface";
import {Question_interface} from "../utils/question_interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private static unique_tags: string[];
  constructor(private router: Router) {}
  title = 'fe-stackoverflow';
  static users: User_interface[] = (users_dummy as any).default;
  static current_user: User_interface[] = [];

  static questions: Question_interface[] = (questions_dummy as any).default;

  //get the tags from the questions
  question_tags = (questions_dummy as any).default.map((question: { tags: any; }) => question.tags);

  //get the unique tags from the questions
   unique_tags = [...new Set(this.question_tags.flat())];

   getUniqueTags() {
    return this.unique_tags;
   }


  static getCurrentUser() {
    return AppComponent.current_user[AppComponent.current_user.length - 1];
  }
  ngOnInit(): void {
    console.log(AppComponent.users);
    console.log(AppComponent.questions);
    console.log(this.unique_tags);
    console.log("fe-stackoverflow app is running!");
    console.log("Users:", AppComponent.current_user);
    console.log("Current user:", AppComponent.getCurrentUser())
  }

  static getUniqueTags() {
    return this.unique_tags;
  }
}
