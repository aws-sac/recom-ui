import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  page = 'profile'

  constructor(private userService: UserService) {}

  updatePage(page) {
    this.page = page;
  }
}
