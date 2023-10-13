import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'DevChuva';
  isExpanded = false;
  buttonText = 'Ver mais';

  showForm = false;

  formSubmitted = false;

  showTopic = false;

  showComments = false;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? 'Ver menos' : 'Ver mais';
  }

  //discussoes - lógica

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
    this.showComments = true
  }
}
