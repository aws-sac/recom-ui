import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data = {
    calories: this.userService.calories,
    fullName: this.userService.fullName,
    description: this.userService.description,
    diseases: this.userService.diseases
  }

  @Output() onSave = new EventEmitter();

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

    this.onSave.emit(this.data);
  }
}
