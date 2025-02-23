import { RecipeService } from './../../recipe.service';
import { Component, OnInit } from '@angular/core';
import { RecipeAitmComponent } from './recipe-aitm/recipe-aitm.component';
import { Recipe } from '../rcidpe.modelul'; // اسم الملف الصحيح
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true, // اجعل المكون مستقلًا إذا كنت تستخدم imports
  imports: [RecipeAitmComponent, NgFor], // استيراد المكون RecipeAitmComponent
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'], //
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  noRecipecc: any = false;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  noNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
