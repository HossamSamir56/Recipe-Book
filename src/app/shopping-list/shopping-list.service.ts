import { EventEmitter } from '@angular/core';
import { Ingrdiens } from '../hsared/ingrdiens.model';

export class ShoppingListService {
  ingrdiensChang = new EventEmitter<Ingrdiens[]>();
  private ingrdiens: Ingrdiens[] = [
    new Ingrdiens('Apples', 5),
    new Ingrdiens('Tomatoes', 10),
  ];
  getIngrdiens() {
    return this.ingrdiens.slice();
  }
  addIngrdiens(ingrdient: Ingrdiens) {
    this.ingrdiens.push(ingrdient);
    this.ingrdiensChang.emit(this.ingrdiens.slice());
  }
  addIngrdiensRecipe(ingrdients: Ingrdiens[]) {
    this.ingrdiens.push(...ingrdients);
    this.ingrdiensChang.emit(this.ingrdiens.slice());
  }
}
