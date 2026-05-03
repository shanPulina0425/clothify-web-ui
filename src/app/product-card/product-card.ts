import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../app';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

   @Input() item! :Product;

   @Output() itemAdded = new EventEmitter<Product>();

  addToCart(){

    this.itemAdded.emit(this.item);

  }


}
