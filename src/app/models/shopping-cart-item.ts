import { Product } from './product';

export class ShoppingCartItem {
 
  
constructor(public  price: any, public quantity: number){}

//   constructor(init?: Partial<ShoppingCartItem>) {
//     Object.assign(this, init);
//   }

//   get totalPrice() { return this.price * this.quantity; }
}