import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Product } from '../app';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {

  @Input() cartItems:Product[]=[];

  @Output() closePopup = new EventEmitter<void>();

  @Output() checkout =new EventEmitter<void>();

  get totalPrice():number{

    let total=0;

    for(let item of this.cartItems){

      total+=item.price

    }
    return total;

  }

}
