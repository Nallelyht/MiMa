import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-new-remedy',
  templateUrl: './new-remedy.component.html',
  styleUrls: ['./new-remedy.component.scss']
})
export class NewRemedyComponent implements OnInit {
  ingredients = [];

  constructor(private bottomSheetRef: MatBottomSheetRef<NewRemedyComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

  createRemedy(remedy) {
    console.log(remedy.value);
  }
  addIngredient(ingredient, e) {
    e.preventDefault();
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
}
