import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../../app.component";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit{

  question: any;

  submit(questionForm: NgForm) {

    const questionId = Math.floor(Math.random() * 1000);
    console.log("Question id:", questionId);
    const questionTitle = questionForm.value.title;
    const questionText = questionForm.value.description;
    const tags = questionForm.value.tags.split(','); // Assuming tags are entered as comma-separated values

    // Retrieve user from session storage
    const userJSON = sessionStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;

    if (!user) {
      // User is not logged in, handle accordingly
      console.log('User is not logged in.');
      return;
    }

    const newQuestion = {
      questionId: questionId,
      title: questionTitle,
      text: questionText,
      user: user
    };

    console.log("New question:", newQuestion);

    this.http.post("http://localhost:8080/questions/create?tags=" + tags.join(','), newQuestion)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Question added:", response);
          // Reset the form fields
          questionForm.resetForm();
        },
        (error: any) => {
          // Handle error
          console.error("Error adding question:", error);
        }
      );
  }


  ngOnInit(): void {

  }

  constructor(private router: Router, private http:HttpClient) {}

}
