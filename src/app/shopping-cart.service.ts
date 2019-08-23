import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take, map } from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
 
  constructor(private db: AngularFireDatabase) { }

 create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<any>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges()
            .pipe(map((x:any) => new ShoppingCart(x.items)));
  }

  async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if(!cartId){
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
    } 
      return cartId;

  }

  async addToCart(productName: any, size:any, price:any) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + productName);
    item$.valueChanges().pipe(take(1)).subscribe((item:any)=> {
        if (item !== null) {
          item$.update({product: productName, 
                        size: size ,
                        price: price,
                        quantity: (item.quantity || 0) + 1});
        } else {
          item$.set({product: productName, size: size, price:price, quantity: 1});
        }
    });
  }

  async reMoveFromCart(productName: any, size:any, price:any) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + productName);
    item$.valueChanges().pipe(take(1)).subscribe((item:any)=> {
      if (item.quantity === 0) item$.remove();
        if (item) {
          item$.update({product: productName, 
                        size: size ,
                        price: price,
                        quantity: (item.quantity || 0) - 1});
        } 
    });
  }


  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items/').remove();

  }
 

 
}
