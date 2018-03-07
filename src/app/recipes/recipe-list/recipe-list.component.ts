import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pumpkin Pie', 'This is a recipe for pumpkin pie', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Pumpkin_Pie.jpg'),
    new Recipe('Apple Pie', 'This is a recipe for apple pie', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
