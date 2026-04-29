import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ProductCard } from './product-card/product-card';


export interface Product{
  id:number;
  name:string;
  price:number;
  imageUrl:string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('Clothify Store');

  productList: Product[] =[

{ id: 1, name: 'Classic White T-Shirt', price: 2500, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80' },
    { id: 2, name: 'Slim Fit Blue Jeans', price: 5500, imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80' },
    { id: 3, name: 'Oversized Black Hoodie', price: 8500, imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&q=80' },
    { id: 4, name: 'Canvas Sneakers', price: 12500, imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&q=80' },
    //{ id: 5, name: 'Denim Jacket', price: 9500, imageUrl: '🧥' },
    //{ id: 6, name: 'Casual Summer Cap', price: 1800, imageUrl: '🧢' }

  ]

  /*
  addToCart(item: Product){

    alert(item.name+' added to your Clothify Cart!');

  }
  */
  
}

