import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule.forChild([{ path: 'shopping-list', component: ShoppingListComponent }]), CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ShoppingListComponent, ShoppingEditComponent]
})
export class ShoppingListModule {}
