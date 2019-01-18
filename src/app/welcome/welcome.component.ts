import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  page = 'profile'

  recipes = [];

  constructor(private userService: UserService, private http: HttpClient) {}

  updatePage(page) {
    this.page = page;
  }

  getRecipes($event) {
    this.http.get('https://recom-api.herokuapp.com/recommandations').subscribe(data => {
      console.log(data)

      this.recipes = data[2];

      this.page = 'daily';
    })
  }
}
