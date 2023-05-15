import { Component } from '@angular/core';

@Component({
  selector: 'app-specific-question',
  templateUrl: './specific-question.component.html',
  styleUrls: ['./specific-question.component.scss']
})
export class SpecificQuestionComponent {
  layout: string = 'specific-question';

  changeLayout(layout: string) {
    this.layout = layout;
  }
}
