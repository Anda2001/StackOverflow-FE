import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu-questions',
  templateUrl: './menu-questions.component.html',
  styleUrls: ['./menu-questions.component.scss']
})
export class MenuQuestionsComponent {

  @Output() layoutSelected = new EventEmitter<string>();

  changeLayout(layout: string) {
    this.layoutSelected.emit(layout);
  }

}
