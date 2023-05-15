import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-specific-question-menu',
  templateUrl: './specific-question-menu.component.html',
  styleUrls: ['./specific-question-menu.component.scss']
})
export class SpecificQuestionMenuComponent {
  @Output() layoutSelected = new EventEmitter<string>();

  changeLayout(layout: string) {
    this.layoutSelected.emit(layout);
  }
}
