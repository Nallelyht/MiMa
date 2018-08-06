import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-new-remedy',
  templateUrl: './new-remedy.component.html',
  styleUrls: ['./new-remedy.component.scss']
})
export class NewRemedyComponent implements OnInit {
  ingredients = [];
  newIngredient: any = {};

  constructor(private bottomSheetRef: MatBottomSheetRef<NewRemedyComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

  createRemedy(remedy) {
    this.newIngredient.title = remedy.value.title;
    this.newIngredient.description = remedy.value.description;
    this.newIngredient.ingredients = this.ingredients;
    console.log(this.newIngredient);
  }
  addIngredient(ingredient, e) {
    e.preventDefault();
    this.ingredients.push(ingredient);
  }
  removeIngredient(index) {
    const confirmation = confirm('¿Quieres eliminar el ingrediente ' + this.ingredients[index] + '?');
    if (confirmation) {
      this.ingredients.splice(index, 1);
    } else {
      return;
    }
  }
}
