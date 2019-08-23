import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart { 
    items: ShoppingCartItem[]=[];
  constructor(public itemsMap:{[productId: string]: ShoppingCartItem}) {
    // this.itemsMap = itemsMap || {};
    
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(item);
    }
  }

//   getQuantity(product: Product) {
//     let item = this.itemsMap[product.key];
//     return item ? item.quantity : 0;
//   }
  
  get totalPrice() {
     let sum = 0;
    // for (let productId in this.items) 

    //     sum += this;
    for (let productId in this.itemsMap) 
      sum += this.itemsMap[productId].quantity * +this.itemsMap[productId].price;
      return sum;
     
    
  }
  
  get totalItemsCount(): any {
    let count = 0;
    for (let productId in this.itemsMap) 
      count += this.itemsMap[productId].quantity;
    return count;
  }
}