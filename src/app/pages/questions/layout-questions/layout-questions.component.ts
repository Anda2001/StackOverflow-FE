import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-layout-questions',
  templateUrl: './layout-questions.component.html',
  styleUrls: ['./layout-questions.component.scss']
})
export class LayoutQuestionsComponent implements OnInit{

  constructor(private router: Router, private http:HttpClient) {}

  questions = AppComponent.questions;





  goToSpecificQuestion(question: any) {
    console.log("Question:", question)
    this.router.navigate(['/specific-question', question.questionId]);
    }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/questions/getAll");
    response.subscribe((data: any) => {
      console.log(data);
      this.questions = data.map((question: any) => {
        return {
          questionId: question.questionId,
          title: question.title,
          text: question.text,
          answers: question.answers,
          user: question.user,
          creationDate: question.creationDate,
          creationTime: question.creationTime,
          tags: []
        };
      });

      console.log('Before sorting:', this.questions);

      this.questions.sort((a: any, b: any) => {


        if (a.creationDate > b.creationDate) {
          return -1; // Sort in descending order
        } else if (a.creationDate< b.creationDate) {
          return 1;
        } else {
          return 0;
        }
      });

      console.log("Questions",this.questions);
    });


  }

  //filter



}
