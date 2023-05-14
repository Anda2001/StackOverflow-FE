import { Component } from '@angular/core';

@Component({
  selector: 'app-main-questions',
  templateUrl: './main-questions.component.html',
  styleUrls: ['./main-questions.component.scss']
})
export class MainQuestionsComponent {
  layout: string = 'question';

  changeLayout(layout: string) {
    this.layout = layout;
  }

}
