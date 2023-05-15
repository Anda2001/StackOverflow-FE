import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit{
  questions: any[] = AppComponent.questions;

  submit(formData: any) {


    const questionId = this.questions.length + 1;
    const questionTitle = (<HTMLInputElement>document.getElementById('title')).value;
    const questionDescription = (<HTMLInputElement>document.getElementById('description')).value;
    const questionTags = (<HTMLInputElement>document.getElementById('tags')).value.split(",");
    const answers: never[] = [];
    const questionAuthor = "user";

    const newQuestion = {
      id: questionId,
      title: questionTitle,
      description: questionDescription,
      tags: questionTags,
      answers: answers,
      user: questionAuthor
    }

    this.questions.push(newQuestion);
    console.log(this.questions);

    // Reset the form fields

    formData.resetForm();

    const checkmark = document.querySelector('.checkmark');
    // @ts-ignore
    checkmark.style.display = 'inline';

    // Hide the checkmark after 2 seconds
    setTimeout(() => {
      // @ts-ignore
      checkmark.style.display = 'none';
    }, 2000);

  }
  ngOnInit(): void {
  }

  constructor(private router: Router) {}

}
