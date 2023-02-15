import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = [
    {
      item: {},
      quantity: 0
    }
  ]

  getCart(){
    return this.cart;
  }

  addItems(item: any){
    this.cart.push({
      item: item,
      quantity: 1
    })
  }





}
