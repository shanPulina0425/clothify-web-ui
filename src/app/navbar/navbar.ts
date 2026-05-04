import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @Input() cartCount: number=0;

  @Output() cartClicked=new EventEmitter<void>();

  onCartClick(){

    this.cartClicked.emit();
  }


}
