import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private slService: ShoppingListService, private dataService: DataStorageService) {}
  private igChangedSub: Subscription;

  ingredients: Ingredient[];
  ngOnInit() {
    this.ingredients = this.slService.getingredients();
    this.igChangedSub = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
    this.ingredients = ingredients;
    });
  }

  onSaveIngredients() {
    this.dataService.storeIngredients();
    alert("Saved successfully!");
  }

  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}
