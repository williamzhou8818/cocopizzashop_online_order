import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,
              private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result =  this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders').valueChanges();
  }

  // update isdone
  makeisdone(id, isdone) {
    let orders$ = this.db.object('/orders/'+id  );
   // console.log(orders$)
   
  }

}
