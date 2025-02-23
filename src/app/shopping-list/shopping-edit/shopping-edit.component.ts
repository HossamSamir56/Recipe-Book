import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingrdiens } from '../../hsared/ingrdiens.model';

@Component({
  selector: 'app-shopping-edit',
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;
  constructor(private slService: ShoppingListService) {}
  ngOnInit(): void {}
  onAddIteem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingInput = this.amountInputRef.nativeElement.value;
    const newIngrdien = new Ingrdiens(ingName, ingInput);
    this.slService.addIngrdiens(newIngrdien);
  }
}
