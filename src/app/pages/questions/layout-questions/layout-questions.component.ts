import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-questions',
  templateUrl: './layout-questions.component.html',
  styleUrls: ['./layout-questions.component.scss']
})
export class LayoutQuestionsComponent implements OnInit{

  constructor(private router: Router) {}

  questions = AppComponent.questions;



  goToSpecificQuestion(question: any) {
    console.log("Question:", question)
    this.router.navigate(['/specific-question', question.id]);
    }

  ngOnInit(): void {
  }



}
