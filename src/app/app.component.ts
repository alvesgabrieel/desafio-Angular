import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isExpanded = false;
  buttonText = 'ver mais';

  showForm = false;

  formSubmitted = false;

  showTopic = false;

  showComments = false;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? 'ver menos' : 'ver mais';
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.showForm = false;
    this.formSubmitted = true;
    this.showTopic = true;
  }

  createNewForm() {
    this.showForm = true
    this.formSubmitted = false
  }

  toggleComment() {
    this.showComments = !this.showComments
  }
}
