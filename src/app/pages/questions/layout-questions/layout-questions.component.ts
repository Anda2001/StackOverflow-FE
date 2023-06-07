import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-layout-questions',
  templateUrl: './layout-questions.component.html',
  styleUrls: ['./layout-questions.component.scss']
})
export class LayoutQuestionsComponent implements OnInit{
  response: Observable<Object> | any;

  constructor(private router: Router, private http:HttpClient, private route: ActivatedRoute ) {}

  questions = AppComponent.questions;





  goToSpecificQuestion(question: any) {
    console.log("Question:", question)
    this.router.navigate(['/specific-question', question.questionId]);
    }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['tag']) {
        console.log("Tag:", params['tag'])
        this.response = this.http.get("http://localhost:8080/questions/getAll?tag=" + params['tag']);

      }
      else if(params['user']) {
        console.log("User:", params['user'])
        this.response = this.http.get("http://localhost:8080/questions/getAll?user=" + params['user']);
      }
      else if(params['title']) {
        console.log("Title:", params['title'])
        this.response = this.http.get("http://localhost:8080/questions/getAll?title=" + params['title']);
      }
      else {
        this.response = this.http.get("http://localhost:8080/questions/getAll");
      }
    });

    this.response.subscribe((data: any) => {
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
        } else if (a.creationDate < b.creationDate) {
          return 1;
        } else {
          // Dates are equal, compare the creation time
          if (a.creationTime > b.creationTime) {
            return -1; // Sort in descending order
          } else if (a.creationTime < b.creationTime) {
            return 1;
          } else {
            return 0;
          }
        }
      });

      console.log("Questions",this.questions);
    });


  }

  //filter
  filterText: any;


  filterQuestions() {
    console.log("Filtering questions", this.filterText);
    this.router.navigate(['/questions'], { queryParams: { title: this.filterText} });
  }
}
