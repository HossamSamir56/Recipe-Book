import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetalComponent } from './recipe-detal/recipe-detal.component';
import { Recipe } from './rcidpe.modelul';
import { NgIf } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [RecipeListComponent, RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  slcteRecipes!: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.recipeSelcted.subscribe((recipe: Recipe) => {
      this.slcteRecipes = recipe;
    });
  }
}
