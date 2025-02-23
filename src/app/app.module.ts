import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeAitmComponent } from './recipes/recipe-list/recipe-aitm/recipe-aitm.component';
import { RecipeDetalComponent } from './recipes/recipe-detal/recipe-detal.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { GnratDirective } from './hsared/gnrat.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeAitmComponent,
    RecipeDetalComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    GnratDirective,
  ], // استيراد المكونات المستقلة هنا
  bootstrap: [],
  providers: [ShoppingListService],
})
export class AppModule {}
