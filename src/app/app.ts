import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ProductCard } from './product-card/product-card';
import { CartSummary } from './cart-summary/cart-summary';
import { ProductService } from './services/product.service';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ProductCard, CartSummary],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Clothify Store');

  private productService = inject(ProductService);

  productList: Product[] = this.productService.getProducts();

  

  isCartVisible = false;

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  myCart: Product[] = [];

  onAddToCart(selectedItem: Product) {
    
    let existingItem = this.myCart.find(item => item.id ===selectedItem.id);

    if(existingItem){

      existingItem.quantity! +=1;
      

    }else{

      let newItem={...selectedItem, quantity:1};
      this.myCart.push(newItem);
    }

    alert(selectedItem.name + ' added! Cart size: ' + this.myCart.length);

  }

  onCheckoutProcess(){
    
    alert('Order Placed Successfully!... Thank you for shopping with Clothify!');

    this.myCart=[];

    this.isCartVisible=false;
    
  }

  onRemoveFromCart(productId: number){
    this.myCart=this.myCart.filter(item => item.id !==productId);
  }

}
