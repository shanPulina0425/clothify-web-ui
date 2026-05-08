import { Component, inject } from '@angular/core';
import { ProductCard } from '../../product-card/product-card';
import { ProductService } from '../../services/product.service';
import { Product } from '../../app'; 

@Component({
  selector: 'app-home',
  imports: [ProductCard], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
  
  private productService = inject(ProductService);
  productList: Product[] = this.productService.getProducts();

 
  onAddToCart(item: Product) {
    
    console.log("Added:", item.name);
  }
}