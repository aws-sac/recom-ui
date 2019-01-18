import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    this.term = $event.target.value;
  }
}
