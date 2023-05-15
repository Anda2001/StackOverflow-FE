import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit{

  question: any;


    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const questionId = params.get('id');
        const questions = AppComponent.questions;
        this.question = questions.find(question => String(question.id) === questionId);

        // If the question is not found, navigate back to the questions page
        if (!this.question) {
          this.router.navigate(['/questions']);
        }
      });
    }

  submit_answer() {
      const answer = (<HTMLInputElement>document.getElementById('answer')).value;
      const user = "user";//AppComponent.getCurrentUser().name
    const userAnswer = {
      user: user,
      content: answer
    }
      if (answer) {
        this.question.answers.push(userAnswer);
        (<HTMLInputElement>document.getElementById('answer')).value = "";
      }
  }
}
