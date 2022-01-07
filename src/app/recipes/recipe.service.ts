import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe('Tasty recipe', 
        'This is a simple test', 
        'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2014/08/Ciabatta-1842-x-1212.jpg', 
        [
          new Ingredient('Bread', 1),
          new Ingredient('Olive Oil', 1)
        ] ),
        new Recipe('Delicious recipe', 
        'This is a simple test', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', 
        [
          new Ingredient('Gnocchi', 1),
          new Ingredient('Tomato Sauce', 1)
        ] )
      ];

      getRecipes() {
        return this.recipes.slice(); //with the slice method this will return a new array that is an exact copy of the array in this file so we cannot access the array on this file
                                    //from outside, we only get a copy.
    }
}

