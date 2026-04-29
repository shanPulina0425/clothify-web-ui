import { Component, Input } from '@angular/core';
import { Product } from '../app';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

   @Input() item! :Product;

  addToCart(){

    alert(this.item.name+' added to your Clothify Cart!');

  }


}
