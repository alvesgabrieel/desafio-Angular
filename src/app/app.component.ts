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

  toggleContent() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? 'Ver menos' : 'Ver mais';
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm(event: Event) {
    event.preventDefault();
  }
}
