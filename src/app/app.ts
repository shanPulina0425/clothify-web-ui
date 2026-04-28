import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';


export interface Product{
  id:number;
  name:string;
  price:number;
  icon:string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('Clothify Store');

  productList: Product[] =[

{ id: 1, name: 'Classic White T-Shirt', price: 2500, icon: '👕' },
    { id: 2, name: 'Slim Fit Blue Jeans', price: 5500, icon: '👖' },
    { id: 3, name: 'Oversized Black Hoodie', price: 8500, icon: '🧥' },
    { id: 4, name: 'Canvas Sneakers', price: 12500, icon: '👟' },
    { id: 5, name: 'Denim Jacket', price: 9500, icon: '🧥' },
    { id: 6, name: 'Casual Summer Cap', price: 1800, icon: '🧢' }

  ]
}
