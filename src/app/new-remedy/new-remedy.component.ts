import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { NewRemedyService } from '../services/new-remedy.service';

@Component({
  selector: 'app-new-remedy',
  templateUrl: './new-remedy.component.html',
  styleUrls: ['./new-remedy.component.scss']
})
export class NewRemedyComponent implements OnInit {
  ingredients = [];
  newIngredient: any = {};

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<NewRemedyComponent>,
    private remedyService: NewRemedyService
  ) {}

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
    this.newIngredient.idUser = JSON.parse(sessionStorage.getItem('user')).id;
    console.log(this.newIngredient);

    this.remedyService.createRemedy(this.newIngredient).subscribe(newRemedy => {
      this.bottomSheetRef.dismiss(newRemedy);
    });
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
