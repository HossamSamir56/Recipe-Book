import { RouterLink, RouterLinkActive } from '@angular/router';
import { Recipe } from './../../rcidpe.modelul';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-aitm',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './recipe-aitm.component.html',
  styleUrl: './recipe-aitm.component.css',
})
export class RecipeAitmComponent {
  @Input() recipe!: Recipe;
  @Input() index!: number;
}
