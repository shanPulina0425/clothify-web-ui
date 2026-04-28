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
  protected readonly title = signal('my-first-project');

  productList: Product[] =[

    {id: 1, name: 'Asus ZenBook', price: 250000, icon: '💻'},
    {id: 2, name: 'iPhone 15 Pro', price: 350000, icon: '📱'},
    { id: 3, name: 'Wireless Mouse', price: 5000, icon: '🖱️' },
    { id: 4, name: 'Mechanical Keyboard', price: 15000, icon: '⌨️' }

  ]
}
