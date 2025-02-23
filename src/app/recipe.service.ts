import { ShoppingListService } from './shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes/rcidpe.modelul';
import { Ingrdiens } from './hsared/ingrdiens.model';
@Injectable()
export class RecipeService {
  recipeSelcted = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Burger', // اسم الوصفة
      'A delicious with melted cheese', // وصف الوصفة
      'https://www.shutterstock.com/image-photo/smash-burger-lettuce-cheddar-cheese-260nw-2479601213.jpg',
      [
        new Ingrdiens('Meat', 1),
        new Ingrdiens('Frensh Fries ', 10),
        new Ingrdiens('Buns', 2),
      ]
    ),
    new Recipe(
      'Big Burger', // اسم الوصفة
      'A delicious with melted cheese', // وصف الوصفة
      'https://www.shutterstock.com/image-photo/smash-burger-lettuce-cheddar-cheese-260nw-2479601213.jpg',
      [
        new Ingrdiens('Buns', 2),
        new Ingrdiens('Meat', 1),
        new Ingrdiens('jiwh', 1),
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngrditShopp(ingrdiens: Ingrdiens[]) {
    this.slService.addIngrdiensRecipe(ingrdiens);
  }
}
