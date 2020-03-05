import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.model';

@Injectable({ providedIn: 'root' }) //This is optional if we include this service in providers array in app.module.ts
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService, private authService: AuthService, private slService: ShoppingListService) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://recipeshoppinglistproject.firebaseio.com/recipes.json', recipes).subscribe(response => {
      console.log(response);
    });
  }

  storeIngredients() {
      const ingredients: Ingredient[] = this.slService.getingredients();
      this.http.put('https://recipeshoppinglistproject.firebaseio.com/ingredients.json', ingredients).subscribe(response => {
        console.log(response);
      });
    }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipeshoppinglistproject.firebaseio.com/recipes.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
    );
  }

  fetchIngredients() {
    return this.http.get<Ingredient[]>('https://recipeshoppinglistproject.firebaseio.com/ingredients.json').pipe(
      map(ingredients => {
        return ingredients.map(ingredients => {
          return { ...ingredients };
        });
      }),
      tap(ingredients => { 
        this.slService.setIngredients(ingredients);
      })
    );
  }

}
