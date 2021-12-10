import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simple test', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2014/08/Ciabatta-1842-x-1212.jpg' ),
        new Recipe('A Test Recipe', 'This is a simple test', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2014/08/Ciabatta-1842-x-1212.jpg' )
      ];

      getRecipes() {
        return this.recipes.slice(); //with the slice method this will return a new array that is an exact copy of the array in this file so we cannot access the array on this file
                                    //from outside, we only get a copy.
    }
}

