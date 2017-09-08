import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Dummy', 'dummy', 'https://images-na.ssl-images-amazon.com/images/I/21y7HdqcDHL._SY300_.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
  	this.recipeSelected.emit(recipe);
  }
}
