import { Component, OnInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingrdiens } from '../hsared/ingrdiens.model';
import { NgFor } from '@angular/common';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEditComponent, NgFor],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingrdiens: Ingrdiens[] = [];
  constructor(private slService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingrdiens = this.slService.getIngrdiens();
    this.slService.ingrdiensChang.subscribe((ingrdien: Ingrdiens[]) => {
      this.ingrdiens = ingrdien;
    });
  }
}
