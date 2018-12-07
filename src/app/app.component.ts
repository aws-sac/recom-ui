import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recom';

  loggedIn = false;

  login() {
    this.loggedIn = !this.loggedIn;
  }
}
