import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Biriyani',
      'Desciption',
      'https://media.istockphoto.com/photos/chicken-biryani5-picture-id501141009?k=6&m=501141009&s=612x612&w=0&h=IM18kpeCmPT0fsJozTez9lnbSrJqybe6rPIFmr7XeGs=',
      [
        new Ingredient('Basmati Rice Bag', 1),
        new Ingredient('Chicken Pieces', 10),
        new Ingredient('vegetable oil pack', 1),
        new Ingredient('large onions, finely chopped', 2),
        new Ingredient('Mirchi', 10),
        new Ingredient('Curd LB', 1),
        new Ingredient('Cloves, Cumin, Caradamom, Stars Each', 3),
        new Ingredient('Saffron Packet', 1),
        new Ingredient('Mint Leaves Pack', 1),
        new Ingredient('Garlic Cloves', 2),
        new Ingredient('Salt Packet', 1),
        new Ingredient('Biriyani Masala', 1)
      ]
    ),
    new Recipe('Paneer Fried Rice', 'Desciption', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2013/03/paneer-fried-rice-recipe-6.jpg', [
      new Ingredient('Basmati Rice Bag', 1),
      new Ingredient('Paneer Pack', 2),
      new Ingredient('vegetable oil pack', 1),
      new Ingredient('large onions, finely chopped', 2),
      new Ingredient('Mirchi', 10),
      new Ingredient('Beans', 5),
      new Ingredient('Salt packet', 1),
      new Ingredient('Capsicum', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //a copy of recipes
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
