import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Chicken Biriyani',
      'Desciption',
      'https://media.istockphoto.com/photos/chicken-biryani5-picture-id501141009?k=6&m=501141009&s=612x612&w=0&h=IM18kpeCmPT0fsJozTez9lnbSrJqybe6rPIFmr7XeGs='
    ),
    new Recipe('Paneer Fried Rice', 'Desciption', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2013/03/paneer-fried-rice-recipe-6.jpg')
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
