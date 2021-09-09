import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  // @Input() recipeItem: {description: string, name: string, imagePath: string}

 @Output() recipeSelected = new EventEmitter<void>();// type void because it won't pass any information

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
