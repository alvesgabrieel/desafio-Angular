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

  toggleContent() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? 'Ver menos' : 'Ver mais';
  }
}
