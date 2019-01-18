import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() updatePage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updatePageEvent(page) {
    this.updatePage.emit(page)
  }
}
