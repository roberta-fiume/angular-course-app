import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2014/08/Ciabatta-1842-x-1212.jpg' ),
    new Recipe('A Test Recipe', 'This is a simple test', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2014/08/Ciabatta-1842-x-1212.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
