import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgIf } from '@angular/common';
import { ShoppingListService } from './shopping-list/shopping-list.service';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ShoppingListService],
})
export class AppComponent {
  title = 'projcke-app';
  featuredLoded = 'recipe';
  onNavignte(featured: string) {
    this.featuredLoded = featured;
  }
}
