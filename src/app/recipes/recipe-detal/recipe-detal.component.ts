import { RecipeService } from './../../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../rcidpe.modelul';
import { GnratDirective } from '../../hsared/gnrat.directive';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detal',
  imports: [GnratDirective, NgFor],
  templateUrl: './recipe-detal.component.html',
  styleUrl: './recipe-detal.component.css',
})
export class RecipeDetalComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  noAddShopping() {
    this.recipeService.addIngrditShopp(this.recipe.ingrdiens);
  }
  noEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
