import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  calories = 0;
  fullName = '';
  description = '';
  diseases = [];

  save(data) {
    this.calories = data.calories;
    this.fullName = data.fullName;
    this.description = data.description;
    this.diseases = data.diseases;
  }
}
