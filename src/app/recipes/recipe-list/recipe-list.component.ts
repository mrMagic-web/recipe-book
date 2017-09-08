import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
	  recipes: Recipe[] = [
      new Recipe('Schnitzel', 'Very tasty', 'http://i.iplsc.com/sznycel-po-wiedensku/0003KT9OPN4NWME5-C122-F4.jpg', []),
      new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    ];
	@Output() recipeSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
  	this.recipeSelected.emit(recipe);
  }
}
