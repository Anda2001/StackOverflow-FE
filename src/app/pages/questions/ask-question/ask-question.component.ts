import { Component } from '@angular/core';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent {

  question = {
    title: '',
    description: '',
    tags: ''
  };


  layout: string = 'question';

  submitQuestionForm() {
    // Handle form submission logic here
    console.log('Question submitted:', this.question);
    // Add your own logic to process the form data (e.g., send it to a server, update a database, etc.)
  }

  showCheckmark: boolean = false;




  submit() {
    // Perform form submission logic here

    // Set showCheckmark to true to show the green checkmark
    this.showCheckmark = true;

    // Reset showCheckmark after 3 seconds
    setTimeout(() => {
      this.showCheckmark = false;
    }, 3000);

    // Reload the page on the same tab after 3 seconds
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

}
