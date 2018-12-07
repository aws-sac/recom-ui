import { Component } from '@angular/core';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  term = ''

  recipes = [
    {
      title: 'Ham Persillade with Mustard Potato Salad and Mashed Peas',
      rating: 2.5
    },
    {
      title: 'Yams Braised with Cream, Rosemary and Nutmeg',
      rating: 5
    },
    {
      title: 'Asian Pear and Watercress Salad with Sesame Dressing',
      rating: 3
    }
  ]

  onChange($event) {
    this.term = $event.target.value;
  }
}
