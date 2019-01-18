import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data = {
    calories: 0,
    fullName: '',
    description: '',
    diseases: []
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  pushPop(d) {
    if (this.data.diseases.includes(d)) {
      this.data.diseases = this.data.diseases.filter(function(item) {
        return item !== d
      })
    } else {
      this.data.diseases.push(d)
    }
  }

  saveProfile() {
    console.log(this.data);
    this.userService.save(this.data);
  }
}
